import { Panel, Tabs } from '@mergestat/blocks'
import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'
import { VENDOR_TYPE } from 'src/utils/constants'
import ReposAuto from './tabs/repos-auto'
import ReposManual from './tabs/repos-manual'

const ReposAutoManual: React.FC = () => {
  const [{ gsDetail: { auto, totalManual, vendor } }] = useGitSourceDetailContext()

  return (
    <Panel className='rounded-md shadow-sm m-auto mt-6'>
      <Panel.Header className='border-b-0 h-14'>
        <div className='w-full flex justify-between'>
          <h4 className='t-panel-title'>Repos</h4>
        </div>
      </Panel.Header>

      <Panel.Body className='p-0'>
        <Tabs>
          <Tabs.List className='border-b px-6'>
            <>{vendor !== VENDOR_TYPE.GIT && <Tabs.Item>{`Auto (${auto?.length || 0})`}</Tabs.Item>}</>
            <Tabs.Item>{`Manual (${totalManual})`}</Tabs.Item>
          </Tabs.List>
          <Tabs.Panels className="h-full bg-gray-50 overflow-auto">
            <>{vendor !== VENDOR_TYPE.GIT &&
              <Tabs.Panel>
                <ReposAuto />
              </Tabs.Panel>
            }</>
            <Tabs.Panel>
              <ReposManual />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Panel.Body>
    </Panel>
  )
}

export default ReposAutoManual
