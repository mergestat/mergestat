import React, { useCallback, useState } from "react"
import {
  Button,
  Checkbox,
  CHECKBOX_STATES,
  ColoredBox,
  HelpText,
  InlineBanner,
  Input,
  Label,
  Panel
} from "@mergestat/blocks"
import { SearchIcon } from "@mergestat/icons"
import { getReposFromOrgName } from './useAddRepoContext'
import { EmptyComponent } from './EmptyComponent'
import { useReposContext } from './useAddRepoContext'

const AddFromGitOrg = ({
  openAutoImportView
}: {
  openAutoImportView: () => void
}) => {
  const [{ reposFromOrg }, setReposState] = useReposContext()
  const [orgName, setOrgName] = useState<string>('')

  const handleFindRepos = () => {
    const repos = getReposFromOrgName(orgName)

    setReposState(prevState => ({
      ...prevState,
      reposFromOrg: repos,
    }))
  }

  const selectedState = useCallback(() => {
    const selectedRepos = reposFromOrg.filter(repo => repo.checked)

    if (selectedRepos.length === 0) return CHECKBOX_STATES.Unchecked
    if (selectedRepos.length === reposFromOrg.length) return CHECKBOX_STATES.Checked
    return CHECKBOX_STATES.Indeterminate
  }, [reposFromOrg])

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-5">
        <h3 className="t-h3 mb-3">Add from GitHub organization</h3>          
        <div className="flex items-center gap-2">
          <Label htmlFor="orgName" className="whitespace-nowrap">GitHub organization</Label>
          <Input
            id="orgName"
            value={orgName}
            type="text"
            placeholder="orgnization-name"
            onChange={(e) => setOrgName(e.currentTarget.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (orgName !== "") handleFindRepos()
              }
            }}
          />
          <Button
            skin="secondary"
            className="whitespace-nowrap"
            disabled={orgName === ""}
            onClick={handleFindRepos}
          >
            Find Repos
          </Button>
        </div>
      </div>

      {reposFromOrg.length === 0 ? (
        <EmptyComponent label="Enter GitHub organization to select repositoriest" />
      ) : (
        <Panel className="h-80">
          <Panel.Header className="justify-between">
            <div className="flex">
              <Checkbox
                value={selectedState()}
                onClick={(e) => {
                  const checked = (e.currentTarget.checked)
                  setReposState(prevState => {
                    const repos = prevState.reposFromOrg
                    return {
                      ...prevState,
                      reposFromOrg: [...repos.map(repo => ({
                        ...repo,
                        checked: checked
                      }))],
                    }
                  })
                }}
              />
              <HelpText>
                {reposFromOrg.filter(repo => repo.checked).length} of {reposFromOrg.length} repositories selected
              </HelpText>
            </div>

            <Input
              placeholder="Search..."
              startIcon={(
                <SearchIcon className="t-icon t-icon-heroicons-search" />
              )}
              // onChange={(e) => handleSearch(e.currentTarget.value)}
            />
          </Panel.Header>
          <Panel.Body className="p-0 overflow-y-auto">
            <InlineBanner className="bg-white">
              Want to automatically add repos from this organization?<br />
              <a onClick={openAutoImportView}>Auto import</a> repos from organization instead
            </InlineBanner>
            {reposFromOrg.map((repo, index) => {
              return (
                <div key={index} className="flex items-center px-6 py-3 border-t">
                  <Checkbox
                    id={"repo_" + index}
                    checked={repo.checked}
                    onChange={(e) => {
                      const checked = (e.currentTarget.checked)
                      setReposState(prevState => {
                        const repos = prevState.reposFromOrg
                        repos[index].checked = checked
                        return {
                          ...prevState,
                          reposFromOrg: [...repos],
                        }
                      })
                    }}
                  />
                  <ColoredBox
                    size='8'
                    className="mr-2"
                    skin="default"
                  >
                    {repo.icon}
                  </ColoredBox>
                  <Label htmlFor={"repo_" + index}>
                    {repo.subline}
                  </Label>
                </div> 
              )
            })}
          </Panel.Body>
        </Panel>
      )}
    </div>
  )
}

export default AddFromGitOrg
