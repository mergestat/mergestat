import React from "react"
import {
  Button,
  Checkbox,
  Input,
  Modal,
  RadioCard,
  Toolbar,
} from "@mergestat/blocks"
import {
  GithubIcon,
  LinkIcon,
  SearchIcon,
  TableIcon,
  XIcon,
} from "@mergestat/icons"

type RadioType = {
  startIcon: React.ReactNode
  isSelected: boolean
  label: string
}

const METHOD_STATES: RadioType[] = [
  { startIcon: <LinkIcon />, isSelected: false, label: "Add from URL" },
  {
    startIcon: <GithubIcon />,
    isSelected: false,
    label: "Add from GitHub org",
  },
  {
    startIcon: <GithubIcon />,
    isSelected: false,
    label: "Add from GitHub user",
  },
  { startIcon: <TableIcon />, isSelected: false, label: "Add Add from CSV" },
]

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

type AddRepoModalPropsT = {
  handleOnClose: () => void;
};

const AddRepoModal = ({
  handleOnClose,
}: AddRepoModalPropsT) => {

  return (
    <Modal open onClose={handleOnClose} size="lg">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Add Repository</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="borderless-muted"
                onClick={handleOnClose}
                startIcon={<XIcon className="t-icon" />}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex">
          <div className="border-r-gray-400 border-r p-8">
            <p className="text-lg font-semibold mb-8">Choose method</p>
            {METHOD_STATES.map((radio, index) => {
              return (
                <RadioCard
                  key={index}
                  className="mb-2"
                  isSelected={radio.isSelected}
                  label={radio.label}
                  startIcon={radio.startIcon}
                  onChange={() => console.log("sdf")}
                />
              )
            })}
          </div>
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
            {/* ) : (
              <div className="py-10 flex justify-center mt-8 border border-gray">
                <p className="text-sm text-gray-400">
                  Enter GitHub organization to select repositories
                </p>
              </div>
            )} */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button skin="secondary" onClick={handleOnClose}>
                Cancel
              </Button>
              <Button
                className="ml-2"
                skin="primary"
                disabled={true}
                onClick={handleOnClose}
              >
                Add 1 Repository
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}

export default AddRepoModal
