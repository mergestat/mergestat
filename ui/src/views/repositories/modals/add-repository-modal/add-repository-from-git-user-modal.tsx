import { Button, Checkbox, ColoredBox, HelpText, Input, Label, Panel } from '@mergestat/blocks'
import { RepositoryIcon, SearchIcon } from '@mergestat/icons'
import React from 'react'

const EmptyRepositories: React.FC = () => {
  return (
    <div className="h-80">
      <div className="flex items-center h-20 border border-gray-200 rounded">
        <HelpText className="mx-auto">
          Enter GitHub username to select repositories
        </HelpText>
      </div>
    </div>
  )
}

type RepositoryRowProps = {
  username: string
  name: string
  selected: boolean
  onChecked: (checked?: boolean) => void
}

const RepositoryRow: React.FC<RepositoryRowProps> = (props) => {
  const { name: repName, selected, onChecked, username } = props
  return (
    <div className="flex items-center px-6 py-3 border-t">
      <Checkbox
        id={'repo_' + name}
        checked={selected}
        onChange={(e) => {
          const checked = e.currentTarget.checked
          onChecked(checked)
        }}
      />
      <ColoredBox size="8" className="mr-2" skin="default">
        <RepositoryIcon className="t-icon" />
      </ColoredBox>
      <Label htmlFor={'repo_' + repName}>
        {username}/{repName}
      </Label>
    </div>
  )
}

export const AddRepositoryFromGitUserModal: React.FC = () => {
  const [username, setUserName] = React.useState<string>('')
  const {
    repositories,
    selectedRepositoriesCount,
    fetchRepositories,
    selectAllRepositories,
    onCheckBoxClicked,
  } = useGitUser()

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-6">
        <h3 className="t-h3 mb-6">Add from GitHub user</h3>
        <div className="flex items-center gap-2">
          <Label htmlFor="username" className="whitespace-nowrap">
            Username
          </Label>
          <Input
            id="username"
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <Button
            skin="secondary"
            className="whitespace-nowrap"
            disabled={username === ''}
            onClick={() => fetchRepositories()}
          >
            Find Repos
          </Button>
        </div>
      </div>
      {repositories.length === 0
        ? <EmptyRepositories />
        : <Panel className="h-80">
          <Panel.Header className="justify-between gap-x-6">
            <div className="flex">
              <Checkbox
                checked={selectedRepositoriesCount === repositories.length}
                onClick={(e) => {
                  const checked = e.currentTarget.checked
                  selectAllRepositories(checked)
                }}
              />
              <HelpText>
                {selectedRepositoriesCount} of {repositories.length}{' '}
                repositories selected
              </HelpText>
            </div>
            <Input
              className="flex-grow max-w-sm"
              placeholder="Search..."
              startIcon={
                <SearchIcon className="t-icon t-icon-heroicons-search" />
              }
            // onChange={(e) => handleSearch(e.currentTarget.value)}
            />
          </Panel.Header>
          <Panel.Body className="p-0 overflow-y-auto">
            {repositories.map((repo, index) => (
              <RepositoryRow
                key={index}
                username={username}
                name={repo.name}
                selected={repo.selected}
                onChecked={() => onCheckBoxClicked(repo.name)}
              />
            ))}
          </Panel.Body>
        </Panel>}
    </div>
  )
}

const useGitUser = () => {
  const [repositories, setRepositories] = React.useState<
    Array<{ name: string, selected: boolean }>
  >([])

  const fetchRepositories = () => {
    setRepositories(
      Array(294)
        .fill(null)
        .map((_, i) => ({ name: `rep${i + 1}`, selected: false }))
    )
  }

  const onCheckBoxClicked = (repository: string) => {
    setRepositories((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.name === repository ? !item.selected : item.selected,
      }))
    )
  }

  const selectAllRepositories = (checked: boolean) => {
    setRepositories((prev) =>
      prev.map((item) => ({ ...item, selected: checked }))
    )
  }

  return {
    repositories,
    selectedRepositoriesCount: repositories.filter((repo) => repo.selected).length,
    fetchRepositories,
    onCheckBoxClicked,
    selectAllRepositories,
  }
}
