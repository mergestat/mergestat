import { Button, HelpText, Input, Label, ListItem } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import React from 'react'

const EmptyRepositories: React.FC = () => {
  return (
    <div className="h-80">
      <div className="flex items-center h-20 border border-gray-100 rounded">
        <HelpText className="mx-auto">No repository added yet</HelpText>
      </div>
    </div>
  )
}

export const AddRepositoryFromURLModal: React.FC = (props) => {
  const { addURL, removeURL, repositories } = useURLRepositories()
  const [url, setURL] = React.useState('')

  const isURLValid = React.useMemo(() => false, [url])

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-5">
        <h3 className="t-h3 mb-3">Add from URL</h3>
        <div className="flex w-full items-center gap-2">
          <Label htmlFor="repoUrl">URL</Label>
          <Input
            id="repoUrl"
            value={url}
            type="text"
            placeholder="github.com/owner/repo"
            onChange={(e) => setURL(e.currentTarget.value)}
          />
          <Button
            skin="secondary"
            className="whitespace-nowrap"
            startIcon={<PlusIcon className="t-icon" />}
            disabled={isURLValid}
            onClick={() => addURL(url)}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="overflow-y-auto h-80">
        {repositories.length === 0 && <EmptyRepositories />}
        {repositories.length > 0 && (
          <div className="border border-gray-100 rounded">
            {repositories.map((repository, index) => (
              <ListItem
                key={index}
                title={repository}
                className={`p-2 border-b`}
                subline={repository + '/example-repo-name'}
                startIcon={<RepositoryIcon className="t-icon" />}
                onCloseClick={() => removeURL(repository)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const useURLRepositories = () => {
  const [repositories, setRepositories] = React.useState<Array<string>>([])

  const addURL = (url: string) => {
    if (!url) return
    if (repositories.includes(url)) return
    setRepositories(prev => [...prev, url])
  }

  const removeURL = (url: string) => {
    setRepositories((prev) => prev.filter((repo) => repo !== url))
  }

  return {
    repositories,
    addURL,
    removeURL,
  }
}
