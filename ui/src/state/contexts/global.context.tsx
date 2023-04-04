import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { CrumbData, TableFilter } from 'src/@types'

type GlobalContextT = {
  crumbs: CrumbData[]
  reposFilter: TableFilter
}

type UseGlobalContextT = [
  GlobalContextT,
  React.Dispatch<React.SetStateAction<GlobalContextT>>
]

const initialState: GlobalContextT = {
  crumbs: [],
  reposFilter: { search: '', total: 0, rows: 20, page: 0 } as TableFilter
}

function useGlobalEditor(): UseGlobalContextT {
  const [state, setState] = React.useState<GlobalContextT>(initialState)
  return [state, setState]
}

// Generate context
const [useGlobalContext, GlobalContextProvider] = createGenericContext<UseGlobalContextT>()

// Generate provider
const GlobalProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [globalState, setGlobalState] = useGlobalEditor()

  return (
    <GlobalContextProvider value={[globalState, setGlobalState]}>
      {props.children}
    </GlobalContextProvider>
  )
}

function useGlobalSetState() {
  const [_, setState] = useGlobalContext()

  const setCrumbs = (crumbs: CrumbData[]) => {
    setState(prev => ({
      ...prev,
      crumbs
    }))
  }

  const setSearchRepos = (search: string) => {
    setState(prev => ({
      ...prev,
      reposFilter: {
        ...prev.reposFilter,
        search
      }
    }))
  }

  const setRowsRepos = (rows: number) => {
    setState(prev => ({
      ...prev,
      reposFilter: {
        ...prev.reposFilter,
        rows
      }
    }))
  }

  const setPageRepos = (page: number) => {
    setState(prev => ({
      ...prev,
      reposFilter: {
        ...prev.reposFilter,
        page
      }
    }))
  }

  const setTotalRepos = (total: number) => {
    setState(prev => ({
      ...prev,
      reposFilter: {
        ...prev.reposFilter,
        total
      }
    }))
  }

  return {
    _,
    setCrumbs,
    setSearchRepos,
    setRowsRepos,
    setPageRepos,
    setTotalRepos
  }
}

export {
  useGlobalContext,
  GlobalProvider,
  useGlobalSetState,
}
