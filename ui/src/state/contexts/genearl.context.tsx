import { createGenericContext } from 'lib/createGenericContext'
import React, { PropsWithChildren } from 'react'

type GeneralContextT = {
  autoImportingRepos: boolean
}

type UseGeneralContextT = [
  GeneralContextT,
  React.Dispatch<React.SetStateAction<GeneralContextT>>
]

const initialState: GeneralContextT = {
  autoImportingRepos: false,
}

function useGeneral(): UseGeneralContextT {
  const [state, setState] = React.useState<GeneralContextT>(initialState)
  return [state, setState]
}

// Generate context
const [useGeneralContext, GeneralContextProvider] = createGenericContext<UseGeneralContextT>()

// Generate provider
const GeneralProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [general, setGeneral] = useGeneral()

  return (
    <GeneralContextProvider value={[general, setGeneral]}>
      {props.children}
    </GeneralContextProvider>
  )
}

function useGeneralSetState() {
  const [_, setState] = useGeneralContext()

  const setAutoImportingRepos = (autoImportingRepos: boolean) => {
    setState(prev => ({
      ...prev,
      autoImportingRepos
    }))
  }

  return {
    _,
    setAutoImportingRepos,
  }
}

export {
  useGeneralContext,
  GeneralProvider,
  useGeneralSetState,
}
