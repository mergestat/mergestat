import { Button, HelpText, Input, Label, ListItem } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import Image from 'next/image'
import React from 'react'
import { GITHUB_URL } from 'src/utils/constants'
import useURLRepo from '../../hooks/useUrlRepo'

const EmptyRepositories: React.FC = () => {
  return (
    <div className="h-80">
      <div className="flex items-center h-20 border border-gray-200 rounded">
        <HelpText className="mx-auto">No repository added yet</HelpText>
      </div>
    </div>
  )
}

const RepoIcon: React.FC<{ repository: string }> = ({ repository }) => {
  return (repository.includes('github')
    ? <Image
      src={`${GITHUB_URL}/${repository.replace(GITHUB_URL, '').split('/')[0]}.png?size=40`}
      width={40}
      height={40}
      loader={({ src }) => `${src}?w=1&q=50`}
      objectFit="contain"
      className="rounded"
      alt=''
    />
    : <RepositoryIcon className="t-icon" />
  )
}

export const AddRepositoryFromURLModal: React.FC = () => {
  const { addURL, removeURL, setURL, reposToAdd, url } = useURLRepo()

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-6">
        <h3 className="t-h3 mb-6">Add from URL</h3>
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
            onClick={() => addURL(url)}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="overflow-y-auto h-80">
        {reposToAdd.length === 0 && <EmptyRepositories />}
        {reposToAdd.length > 0 && (
          <div className="border border-gray-200 rounded">
            {reposToAdd.map((repository, index) => (
              <ListItem
                key={index}
                title={repository}
                subline={repository}
                className={'p-2 border-b'}
                startIcon={<RepoIcon repository={repository} />}
                onClick={() => removeURL(repository)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
