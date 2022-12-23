import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'
import { CrumbData } from 'src/@types'

type GlobalContextT = {
  crumbs: CrumbData[]
}

type UseGlobalContextT = [
  GlobalContextT,
  React.Dispatch<React.SetStateAction<GlobalContextT>>
]

const initialState: GlobalContextT = {
  crumbs: [],
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

  return {
    _,
    setCrumbs,
  }
}

export {
  useGlobalContext,
  GlobalProvider,
  useGlobalSetState,
}
