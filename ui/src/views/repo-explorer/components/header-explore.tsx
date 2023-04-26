import { useMutation } from '@apollo/client'
import { Alert, Button, Input, Label, Toolbar } from '@mergestat/blocks'
import { CogIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ExploreData } from 'src/@types'
import { ExploreMutation } from 'src/api-logic/graphql/generated/schema'
import { EXPLORE } from 'src/api-logic/graphql/mutations/explore'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'

const HeaderExplore: React.FC = () => {
  const router = useRouter()

  const [{ search }] = useRepoExploreContext()
  const { setLoading, setSearch, setExploreData } = useRepoExploreSetState()

  const [explore, { loading }] = useMutation(EXPLORE, {
    onCompleted: (data: ExploreMutation) => {
      setExploreData(data.explore?.json as ExploreData)
    }
  })

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div className='flex flex-col bg-white w-full border-b px-8 py-4 gap-4'>
      <Toolbar className='h-full'>
        <Toolbar.Left>
          <h2 className='t-h2 mb-0'>Repo Explore</h2>
        </Toolbar.Left>
        <Toolbar.Right>
          <Toolbar.Item>
            <Alert isInline type="info" className='text-gray-400'>100/1000 repos indexed</Alert>
          </Toolbar.Item>
          <Toolbar.Item>
            <Button className='whitespace-nowrap'
              skin="secondary"
              label='Manage Syncs'
              startIcon={<CogIcon className="t-icon" />}
              onClick={() => router.push('/repos/repo-syncs')}
            />
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>

      <div className='flex justify-between gap-4'>
        <div className='flex flex-1'>
          <Label className='whitespace-nowrap text-gray-500 pr-8'>File Path</Label>
          <Input
            id='search'
            type='text'
            placeholder='*.go'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Button
          label='Search'
          disabled={!search}
          className='whitespace-nowrap'
          onClick={() => explore({ variables: { params: search } })}
        />
      </div>
    </div>
  )
}

export default HeaderExplore
