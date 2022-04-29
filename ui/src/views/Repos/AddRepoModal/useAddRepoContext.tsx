import * as React from "react"

import { createGenericContext } from "lib/createGenericContext"

export enum ADD_REPO_METHOD {
  URL,
  GH_ORG,
  GH_USER,
  CSV
}

export type RepoType = {
  name: string
  subline?: string
  icon: React.ReactNode
  url: string
}

type RepoStateProps = {
  addRepoMethod: ADD_REPO_METHOD,
  addedRepos: Array<RepoType>
}

const initialState: RepoStateProps = {
  addRepoMethod: ADD_REPO_METHOD.URL,
  addedRepos: []
}

export type UseRepoStateT = [
  RepoStateProps,
  React.Dispatch<React.SetStateAction<RepoStateProps>>
];

export function useRepoState(): UseRepoStateT {
  const [state, setState] = React.useState<RepoStateProps>(initialState)

  return [state, setState]
}

interface Props {
  children: React.ReactNode
}

// Generate context
const [useReposContext, ReposContextProvider] = createGenericContext<UseRepoStateT>()

// Generate provider
const ReposProvider = ({ children }: Props) => {
  const [reposState, setReposState] = useRepoState()

  return (
    <ReposContextProvider value={[reposState, setReposState]}>
      {children}
    </ReposContextProvider>
  )
}

export {
  useReposContext,
  ReposProvider
}
