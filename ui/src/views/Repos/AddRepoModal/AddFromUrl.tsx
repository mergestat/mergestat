import React, { useCallback, useState } from "react"
import Image from 'next/image'
import { Button, Input, Label, ListItem } from "@mergestat/blocks"
import { PlusIcon, RepositoryIcon } from "@mergestat/icons"
import { checkRepoValidate, getRepoFromUrl } from 'utils'
import { EmptyComponent } from './EmptyComponent'
import { useReposContext } from './useAddRepoContext'

type AddFromUrlPropsT = {
}

const AddFromUrl = ({
}: AddFromUrlPropsT) => {  
  const [{ addedRepos }, setReposState] = useReposContext()
  const [newRepoUrl, setNewRepoUrl] = useState<string>('')

  const checkRepoValid = useCallback(() => {
    return (checkRepoValidate(newRepoUrl))
      ? addedRepos.find((repo) =>
          repo.url.replace(/((http|https):\/\/)?(www\.)?/, '') === newRepoUrl.replace(/((http|https):\/\/)?(www\.)?/, '')
        ) !== undefined
      : true
  }, [newRepoUrl, addedRepos])

  const handleAddRepo = () => {
    const repoInfo = getRepoFromUrl(newRepoUrl)

    setReposState(prevState => ({
      ...prevState,
      addedRepos: [
        ...addedRepos,
        {
          name: repoInfo.replace(/[a-zA-Z0-9\-]+[\/]/, ''),
          subline: repoInfo,
          icon: newRepoUrl.startsWith('github.com')
            ? <Image
                src={`https://github.com/${repoInfo.split('/')[0]}.png?size=40`}
                width={40}
                height={40}
                loader={({ src }) => `${src}?w=1&q=50`}
              />
            : <RepositoryIcon className="text-gray-500" />,
          url: newRepoUrl
        }
      ],
    }))

    setNewRepoUrl('')
  }

  const handleDeleteItem = (index: number) => {
    addedRepos.splice(index, 1)

    setReposState(prevState => ({
      ...prevState,
      addedRepos: [...addedRepos]
    }))
  }

  return (
    <div className="p-6 w-full grid grid-rows-content-layout">
      <div className="mb-5">
        <h3 className="t-h3 mb-3">Add from URL</h3>          
        <div className="flex w-full items-center gap-2">
          <Label htmlFor="repoUrl">URL</Label>
          <Input
            id="repoUrl"
            value={newRepoUrl}
            type="text"
            placeholder="github.com/owner/repo"
            onChange={(e) => setNewRepoUrl(e.currentTarget.value)}
          />
          <Button
            skin="secondary"
            className="whitespace-nowrap"
            startIcon={<PlusIcon className="t-icon" />}
            disabled={checkRepoValid()}
            onClick={handleAddRepo}
          >
            Add
          </Button>
        </div>
      </div>

      <div className="overflow-y-auto">
        {addedRepos.length === 0 ? (
          <EmptyComponent label="No repository added yet" />
        ) : (
          <div className="border border-gray-100 rounded">
            {addedRepos.map((repo, index) => (
              <ListItem
                key={index}
                title={repo.name}
                subline={repo.subline}
                startIcon={repo.icon}
                className={`p-2${index !== addedRepos.length - 1 ? ' border-b' : ''}`}
                onClick={() => setNewRepoUrl(repo.url)}
                onCloseClick={() => handleDeleteItem(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AddFromUrl
