import { createContext, useContext, useReducer } from 'react'
import { ActionType, TabsState } from 'src/@types'

type QueryTabsProviderProps = {
  children?: React.ReactNode
}

const initialState = {}

const reducer = (state: TabsState = initialState, action: ActionType): TabsState => {
  if (action.reset) {
    return { ...initialState }
  }

  if (action.tab) {
    if (action.remove) {
      delete state[action.tab]
    } else {
      state[action.tab] = { ...state[action.tab], ...action.payload }
    }
  }
  return Object.assign({}, state)
}

export const QueryTabsContext = createContext<TabsState>({})
export const QueryTabsDispatchContext = createContext<React.Dispatch<ActionType>>(() => null)

export function QueryTabsProvider({ children }: QueryTabsProviderProps) {
  const [tabsState, dispatch] = useReducer(reducer, {})

  return (
    <QueryTabsContext.Provider value={tabsState}>
      <QueryTabsDispatchContext.Provider value={dispatch}>
        {children}
      </QueryTabsDispatchContext.Provider>
    </QueryTabsContext.Provider>
  )
}

export function useQueryTabsContext() {
  return useContext(QueryTabsContext)
}

export function useQueryTabsDispatch() {
  return useContext(QueryTabsDispatchContext)
}
