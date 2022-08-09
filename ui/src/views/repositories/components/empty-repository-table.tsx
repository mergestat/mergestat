import { Avatar, Button, Panel } from '@mergestat/blocks'
import { PlusIcon, WarningFilledIcon } from '@mergestat/icons'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import Image from 'next/image'
import Link from 'next/link'

export const EmptyRepositoryTable: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-full max-w-5xl">
        <Panel className="shadow-sm rounded-md">
          <Panel.Body>
              <div className="flex flex-row-reverse flex-wrap items-center">
                <div className="w-full md_w-8/12 lg_w-6/12 p-8 lg_p-10 mx-auto">
                  <Image
                      className="inline-block"
                      src={'/assets/illustration-repos.png'}
                      width={300}
                      height={178}
                      layout="responsive"
                      alt=""
                    />
                </div>

                <div className="w-full lg_w-6/12 p-8 lg_p-10 flex flex-col items-center lg_items-start">
                  <Avatar className="mb-6" icon={<WarningFilledIcon className="t-icon"/>} size="md" variant="warning" />
                  <h3 className="t-h3 mb-2">Start by adding a GitHub authentication token</h3>
                  <p className="text-semantic-mutedText">Add a personal access token to import repos from GitHub.</p>
                  <div className="t-button-toolbar mt-8">
                      <Link href="/settings">
                        <Button label="Authenticate GitHub" />
                      </Link>
                      <Button
                        startIcon={<PlusIcon className="t-icon" />}
                        onClick={() => setShowAddRepositoryModal(true)}
                        skin="secondary"
                      >
                        Add Repository
                      </Button>
                  </div>
                </div>

              </div>

          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}
