import { Fragment, useState } from "react"
import dynamic from "next/dynamic"
import { Alert, Button, EmptyState } from "@mergestat/blocks"
import { PlusIcon, RepositoryIcon } from "@mergestat/icons"
import { ReposProvider } from './AddRepoModal/useAddRepoContext'

const AddRepoModal = dynamic(() => import('./AddRepoModal'))
const AddedRepoTable = dynamic(() => import('./AddedRepoTable'))
const ReposNavBar = dynamic(() => import('./ReposNavBar'))

const Repos: React.FC = () => {
  const [addRepoModalOpen, setAddRepoModalOpen] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const [isAlertInfo, setIsAlertInfo] = useState(true)

  const closeModal = () => {
    setAddRepoModalOpen(false)
  }

  return (
    <Fragment>
      <main className="w-full bg-gray-100 ">
        <ReposNavBar onAddRepo={() => setAddRepoModalOpen(true)}/>
        {isEmpty ? (
          <div className="h-4/5 p-8">
            {isAlertInfo && (
              <Alert type="info" title="Auto importing repos...">
                The repos from the auto import setting will appear shortly once
                synced.
              </Alert>
            )}
            <EmptyState
              text="No repositories added yet"
              action={
                <Button
                  skin="secondary"
                  startIcon={<PlusIcon className="t-icon" />}
                  onClick={() => {
                    setAddRepoModalOpen(true)
                  }}
                >
                  Add Repository
                </Button>
              }
              topIcon={
                <div className="t-circle-icon">
                  <RepositoryIcon />
                </div>
              }
            />
          </div>
        ) : (
          <AddedRepoTable />
        )}
      </main>

      {addRepoModalOpen && (
        <ReposProvider>
          <AddRepoModal
            handleOnClose={closeModal}
          />
        </ReposProvider>
      )}
    </Fragment>
  )
}

export default Repos
