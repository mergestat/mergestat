import { Button, Label, Panel } from '@mergestat/blocks'
import { CodeIcon } from '@mergestat/icons'
import { useEffect, useState } from 'react'
import { TopDataBarChart, mapTop10Authors, mapTop10Repos } from 'src/api-logic/mappers/charts/recharts'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { BarChartVertical } from './barchart-vertical'
import { CardLoading } from './custom-shared'

const CardsStatsExplore: React.FC = () => {
  const [{ loading, exploreData: { top_10_repos: top10Repos, top_10_authors: top10Authors } }] = useRepoExploreContext()

  const [top10ReposChart, settop10ReposChart] = useState<TopDataBarChart[]>()
  const [top10AuthorsChart, settop10AuthorsChart] = useState<TopDataBarChart[]>()

  useEffect(() => {
    if (top10Repos) {
      settop10ReposChart(mapTop10Repos(top10Repos))
    }
  }, [top10Repos])

  useEffect(() => {
    if (top10Authors) {
      settop10AuthorsChart(mapTop10Authors(top10Authors))
    }
  }, [top10Authors])

  return (
    <div className='py-8'>
      <div className='md_grid md_grid-cols-2 gap-6 space-y-4 md_space-y-0'>
        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Top 10 Repos</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-center min-h-xs'>
                {top10ReposChart && <BarChartVertical data={top10ReposChart} dataKey='fileCount' xAxisLabel='Files' />}
              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Top 10 Authors</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-center min-h-xs'>
                {top10AuthorsChart && <BarChartVertical data={top10AuthorsChart} dataKey='commitsCount' xAxisLabel='Commits' />}
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>

      <div className='md_grid md_grid-cols-2 gap-6 space-y-4 md_space-y-0 pt-6'>
        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Repo Last Modified</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>

              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>File Last Modified</Label>
            <Button
              isIconOnly
              className='my-0'
              skin='borderless-muted'
              startIcon={<CodeIcon className="t-icon" />}
            />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>

              </div>
            }
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CardsStatsExplore
