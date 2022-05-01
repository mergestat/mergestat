import * as React from "react"
import { RepositoryIcon } from "@mergestat/icons"

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
  icon: React.ReactElement
  url: string
  checked?: boolean
}

type RepoStateProps = {
  addRepoMethod: ADD_REPO_METHOD,
  addedReposFromURL: Array<RepoType>,
  reposFromOrg: Array<RepoType>,
  reposFromUser: Array<RepoType>,
}

const initialState: RepoStateProps = {
  addRepoMethod: ADD_REPO_METHOD.URL,
  addedReposFromURL: [],
  reposFromOrg: [],
  reposFromUser: [],
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

const getReposFromOrgName = (orgName: string) => {
  return Array.from({ length: 100 }).map((_) => ({
    name: "example-repo-name",
    subline: orgName + '/example-repo-name',
    icon: <RepositoryIcon className="t-icon" />,
    url: 'github.com/'+ orgName + '/example-repo-name',
    checked: false,
  }))
}

export {
  getReposFromOrgName,
  useReposContext,
  ReposProvider
}
