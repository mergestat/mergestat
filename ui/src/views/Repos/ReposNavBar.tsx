import { Fragment, useState, ReactNode } from "react"
import dynamic from "next/dynamic"
import {
  BreadcrumbNav,
  Button,
  SplitButton,
  Table,
} from "@mergestat/blocks"
import {
  AutoImportIcon,
  CircleCheckFilledIcon,
  CogIcon,
  GithubIcon,
  PlusIcon,
  TrashIcon,
  XIcon,
} from "@mergestat/icons"

const SyncRepoModal = dynamic(() => import('./SyncRepoModal'))

type ColumnsT= {
  title?: string | undefined
  dataIndex?: any
  className?: string | undefined
  key?: any
  render?: any
}

const INIT_COLUMNS: ColumnsT[] = [
  {
    title: "",
    className: "w-4",
    dataIndex: "successIcon",
    key: "successIcon",
  },
  {
    title: "Source",
    className: "col",
    dataIndex: "source",
    key: "source",
  },
  {
    title: "Import type",
    className: "col",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Last sync",
    className: "text-gray-300",
    dataIndex: "last",
    key: "last",
  },
  {
    title: "",
    className: "w-4",
    dataIndex: "delIcon",
    key: "delIcon",
  },
]

type ReposNavBarPropsT = {
  onAddRepo: () => void
}
const ReposNavBar = ({ onAddRepo }: ReposNavBarPropsT) => {
  const [syncModalOpen, setSyncModalOpen] = useState(false)
  const [aIManage, setAIManage] = useState(false)

  const dataSource: {
    successIcon: string | ReactNode
    source: string
    type: ReactNode
    last: string
    delIcon: ReactNode
  }[] = [
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: "user-name",
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub User
        </p>
      ),
      last: "2 hours ago",
      delIcon: <TrashIcon />,
    },
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: "organization-name",
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub Organization
        </p>
      ),
      last: "2 hours ago",
      delIcon: <TrashIcon />,
    },
    {
      successIcon: <CircleCheckFilledIcon className="text-green-600" />,
      source: "organization-name",
      type: (
        <p className="flex items-center gap">
          <GithubIcon className="mr-2" />
          GitHub Organization
        </p>
      ),
      last: "2 hours ago",
      delIcon: <TrashIcon />,
    },
  ]

  return (
    <Fragment>
      <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
        <div className="text-xl font-semibold">
          <BreadcrumbNav data={[{ text: "Repos" }]} />
        </div>
        <div className="flex justify-between gap-3 items-center">
          <div className="relative">
            <SplitButton
              text="Create Auto Import"
              startIcon={<AutoImportIcon className="t-icon" />}
              onButtonClick={() => {
                setSyncModalOpen(true)
                console.log("ssdf")
              }}
              items={[
                {
                  text: "Manage auto imports",
                  icon: <CogIcon className="t-icon mr-2" />
                }
              ]}
              onItemClick={() => {
                setAIManage(true)
              }}
            />
          </div>

          <Button
            startIcon={<PlusIcon className="t-icon" />}
            onClick={onAddRepo}
          >
            Add Repository
          </Button>
        </div>
      </div>

      {syncModalOpen && (
        <SyncRepoModal onClose={()=>{setSyncModalOpen(false)}} />
      )}

      {/* Auto Import Manage Section */}
      {aIManage && (
        <div className="absolute top-0 left-0 bg-gray-100 w-full h-full z-50">
          <div className="h-16 border-b bg-white border-gray-300 flex justify-between items-center p-5">
            <div className="flex items-center">
              <Button
                skin="borderless-muted"
                startIcon={<XIcon className=" mr-4" />}
                onClick={() => {
                  setAIManage(false)
                }}
              />

              <p className="text-xl border-l border-gray-300 pl-4">
                Manage auto imports
              </p>
            </div>
            <Button
              skin="secondary"
              startIcon={<AutoImportIcon className="mr-2" />}
              onClick={() => {
                setSyncModalOpen(true)
              }}
            >
              Create Auto import
            </Button>
          </div>
          <div className="m-8">
            <Table columns={INIT_COLUMNS} dataSource={dataSource} />
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default ReposNavBar
