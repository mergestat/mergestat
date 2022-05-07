import React, { useCallback, useState } from 'react'
import {
  Button,
  Checkbox,
  CHECKBOX_STATES,
  ColoredBox,
  HelpText,
  InlineBanner,
  Input,
  Label,
  Panel,
} from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { getReposFromUserName } from './useAddRepoContext'
import { EmptyComponent } from './EmptyComponent'
import { useReposContext } from './useAddRepoContext'

const AddFromGitUser = ({
  openAutoImportView,
}: {
  openAutoImportView: () => void
}) => {
  const [{ reposFromUser }, setReposState] = useReposContext()
  const [userName, setUserName] = useState<string>('')

  const handleFindRepos = () => {
    const repos = getReposFromUserName(userName)

    setReposState((prevState) => ({
      ...prevState,
      reposFromUser: repos,
    }))
  }

  const selectedState = useCallback(() => {
    const selectedRepos = reposFromUser.filter((repo) => repo.checked)

    if (selectedRepos.length === 0) return CHECKBOX_STATES.Unchecked
    if (selectedRepos.length === reposFromUser.length)
      return CHECKBOX_STATES.Checked
    return CHECKBOX_STATES.Indeterminate
  }, [reposFromUser])

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-5">
        <h3 className="t-h3 mb-3">Add from GitHub user</h3>
        <div className="flex items-center gap-2">
          <Label htmlFor="userName" className="whitespace-nowrap">
            Username
          </Label>
          <Input
            id="userName"
            value={userName}
            type="text"
            placeholder="user-name"
            onChange={(e) => setUserName(e.currentTarget.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (userName !== '') handleFindRepos()
              }
            }}
          />
          <Button
            skin="secondary"
            className="whitespace-nowrap"
            disabled={userName === ''}
            onClick={handleFindRepos}
          >
            Find Repos
          </Button>
        </div>
      </div>

      {reposFromUser.length === 0 ? (
        <EmptyComponent label="Enter GitHub username to select repositoriest" />
      ) : (
        <Panel className="h-80">
          <Panel.Header className="justify-between">
            <div className="flex">
              <Checkbox
                value={selectedState()}
                onClick={(e) => {
                  const checked = e.currentTarget.checked
                  setReposState((prevState) => {
                    const repos = prevState.reposFromUser
                    return {
                      ...prevState,
                      reposFromUser: [
                        ...repos.map((repo) => ({
                          ...repo,
                          checked: checked,
                        })),
                      ],
                    }
                  })
                }}
              />
              <HelpText>
                {reposFromUser.filter((repo) => repo.checked).length} of{' '}
                {reposFromUser.length} repositories selected
              </HelpText>
            </div>

            <Input
              placeholder="Search..."
              startIcon={
                <SearchIcon className="t-icon t-icon-heroicons-search" />
              }
              // onChange={(e) => handleSearch(e.currentTarget.value)}
            />
          </Panel.Header>
          <Panel.Body className="p-0 overflow-y-auto">
            <InlineBanner>
              Want to automatically add repos from this user?{' '}
              <a onClick={openAutoImportView}>Auto import</a> repos from this
              user instead
            </InlineBanner>
            {reposFromUser.map((repo, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center px-6 py-3 border-t"
                >
                  <Checkbox
                    id={'repo_' + index}
                    checked={repo.checked}
                    onChange={(e) => {
                      const checked = e.currentTarget.checked
                      setReposState((prevState) => {
                        const repos = prevState.reposFromUser
                        repos[index].checked = checked
                        return {
                          ...prevState,
                          reposFromUser: [...repos],
                        }
                      })
                    }}
                  />
                  <ColoredBox size="8" className="mr-2" skin="default">
                    {repo.icon}
                  </ColoredBox>
                  <Label htmlFor={'repo_' + index}>{repo.subline}</Label>
                </div>
              )
            })}
          </Panel.Body>
        </Panel>
      )}
    </div>
  )
}

export default AddFromGitUser
