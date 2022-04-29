import React, { useEffect, useState } from "react"
import { Button, Checkbox, Input } from "@mergestat/blocks"
import { SearchIcon } from "@mergestat/icons"
import { EmptyComponent } from './EmptyComponent'

type RepoType = {
  title: string
  checked: boolean
  img: null,
}

const INIT_REPOS: RepoType[] = [
  { title: "mergestat/mergestat", checked: true, img: null },
  { title: "mergestat/docs", checked: false, img: null },
  { title: "mergestat/blocks", checked: true, img: null },
  { title: "mergestat/fuse", checked: false, img: null },
  { title: "mergestat/time-diff", checked: true, img: null },
  { title: "mergestat/helm-charts", checked: false, img: null },
  { title: "mergestat/homebrew-mergestat", checked: true, img: null },
]

type AddFromGitOrgPropsT = {
  setRepoCount: (num: number) => void
}

const AddFromGitOrg = ({
  setRepoCount
}: AddFromGitOrgPropsT) => {
  const [repos, setRepos] = useState<Array<RepoType>>([])

  useEffect(() => {
    setRepoCount(repos.length)
  }, [repos])

  return (
    <div className="p-8 w-full">
      <p className="text-lg font-semibold mb-8">
        Add from GitHub organization
      </p>
      <div className="flex w-full items-center gap-2">
        <p className="whitespace-nowrap mr-4 text-gray-500 font-medium">
          GitHub organization
        </p>
        <Input placeholder="GitHub organization" />
        <Button
          skin="secondary"
          className="whitespace-nowrap"
          // onClick={}
        >
          Find Repos
        </Button>
      </div>
      {repos.length === 0 ? (
        <EmptyComponent label="Enter GitHub organization to select repositoriest" />
      ) : (
        <div className="m-8 border border-gray-100 rounded">
          <div className="flex border-b border-gray-100 p-2 justify-between gap-8">
            <label
              // onClick={() => {
              //   let newRepos = repos
              //   newRepos.map((repo) => (repo.checked = !isAllChecked))
              //   setRepos([...newRepos])
              // }}
            >
              <Checkbox checked={true} onChange={() => {}} />
              <div
                className="cursor-pointer whitespace-nowrap text-gray-500 w-full"
                onClick={() => {
                  // let newRepos = repos
                  // newRepos.map(
                  //   (repo) => (repo.checked = !isAllChecked)
                  // )
                  // setRepos([...newRepos])
                }}
              >
                <span className="text-gray-900">
                  1
                </span>{" "}
                out of 7 repositories selected
              </div>
            </label>
            <label className="relative">
              <SearchIcon className="t-icon absolute left-2 text-gray-400" />
              <Input placeholder="Search..." className="pl-8" />
            </label>
          </div>
          <div>
            {INIT_REPOS.map((repo, index) => {
              return (
                <div
                  key={`key6_${index}`}
                  className="border-b border-gray-100 p-2 w-full"
                  //onClick={() =>
                    // onChangeRadio(index, "addRepoCheckbox")
                  //}
                >
                  <label>
                    <Checkbox
                      checked={repo.checked}
                      onChange={() => {}}
                    />
                    {repo.img && <img src={repo.img} />}
                    <p
                      className="cursor-pointer whitespace-nowrap text-gray-500 w-full"
                      //onClick={() =>
                        //onChangeRadio(index, "addRepoCheckbox")
                      //}
                    >
                      {repo.title}
                    </p>
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default AddFromGitOrg
