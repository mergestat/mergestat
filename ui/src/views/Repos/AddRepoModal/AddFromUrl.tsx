import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { Button, Input, Label, ListItem } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import { checkRepoValidate, getRepoFromUrl } from 'src/utils'
import { EmptyComponent } from './EmptyComponent'
import { useReposContext } from './useAddRepoContext'

type AddFromUrlPropsT = {}

const AddFromUrl = ({}: AddFromUrlPropsT) => {
  const [{ addedReposFromURL }, setReposState] = useReposContext()
  const [newRepoUrl, setNewRepoUrl] = useState<string>('')

  const checkRepoValid = useCallback(() => {
    return checkRepoValidate(newRepoUrl)
      ? addedReposFromURL.find(
          (repo) =>
            repo.url.replace(/((http|https):\/\/)?(www\.)?/, '') ===
            newRepoUrl.replace(/((http|https):\/\/)?(www\.)?/, '')
        ) !== undefined
      : true
  }, [newRepoUrl, addedReposFromURL])

  const handleAddRepo = useCallback(() => {
    const repoInfo = getRepoFromUrl(newRepoUrl)

    setReposState((prevState) => ({
      ...prevState,
      addedReposFromURL: [
        ...addedReposFromURL,
        {
          name: repoInfo.replace(/[a-zA-Z0-9\-]+[\/]/, ''),
          subline: repoInfo,
          icon: newRepoUrl.startsWith('github.com') ? (
            <Image
              src={`https://github.com/${repoInfo.split('/')[0]}.png?size=40`}
              width={40}
              height={40}
              loader={({ src }) => `${src}?w=1&q=50`}
            />
          ) : (
            <RepositoryIcon className="text-gray-500" />
          ),
          url: newRepoUrl,
        },
      ],
    }))

    setNewRepoUrl('')
  }, [newRepoUrl])

  const handleDeleteItem = (index: number) => {
    addedReposFromURL.splice(index, 1)

    setReposState((prevState) => ({
      ...prevState,
      addedReposFromURL: [...addedReposFromURL],
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
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (!checkRepoValid()) handleAddRepo()
              }
            }}
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

      <div className="overflow-y-auto h-80">
        {addedReposFromURL.length === 0 ? (
          <EmptyComponent label="No repository added yet" />
        ) : (
          <div className="border border-gray-100 rounded">
            {addedReposFromURL.map((repo, index) => (
              <ListItem
                key={index}
                title={repo.name}
                subline={repo.subline}
                startIcon={repo.icon}
                className={`p-2${
                  index !== addedReposFromURL.length - 1 ? ' border-b' : ''
                }`}
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
