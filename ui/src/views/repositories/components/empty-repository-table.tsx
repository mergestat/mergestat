import { Button, Panel } from '@mergestat/blocks'
import { GithubIcon } from '@mergestat/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { TEST_IDS } from 'src/utils/constants'

export const EmptyRepositoryTable: React.FC = () => {
  // const { setShowAddRepositoryModal } = useRepositoriesSetState()

  return (
    <div data-testid={TEST_IDS.emptyRepositoryTable} className="flex items-center justify-center h-full w-full">
      <div className="w-full max-w-5xl">
        <Panel className="shadow-sm rounded-md">
          <Panel.Body>
            <div className="flex flex-row-reverse flex-wrap items-center">
              <div className="w-full md_w-8/12 lg_w-6/12 p-8 lg_p-10 mx-auto">
                <Image
                  className="inline-block"
                  src={'/assets/illustration-repo-syncs.png'}
                  width={300}
                  height={178}
                  layout="responsive"
                  alt=""
                />
              </div>

              <div className="w-full lg_w-6/12 p-8 lg_p-10 flex flex-col items-center lg_items-start">
                {/* <Avatar className="mb-6" icon={<CogIcon className="t-icon" />} size="md" /> */}
                <h3 className="t-h3 mb-2">GitHub Authentication Token</h3>
                <p className="t-text-muted">Add a personal access token to start importing from GitHub (and to work with private repos).</p>
                <div className="t-button-toolbar mt-8">
                  <Link href="/settings/github-authentication">
                    <Button label="Authenticate GitHub" endIcon={<GithubIcon className="t-icon" />} />
                  </Link>
                  {/* <Button
                    startIcon={<PlusIcon className="t-icon" />}
                    onClick={() => setShowAddRepositoryModal(true)}
                    skin="secondary"
                  >
                    Add Repository
                  </Button> */}
                </div>
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}
