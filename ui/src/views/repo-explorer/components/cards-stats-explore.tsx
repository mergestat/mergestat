import { Button, Label, Panel } from '@mergestat/blocks'
import { CodeIcon } from '@mergestat/icons'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { useFileLastModified } from 'src/views/hooks/repoExplore/useFileLastModified'
import { useRepoLastModified } from 'src/views/hooks/repoExplore/useRepoLastModified'
import { useTop10 } from 'src/views/hooks/repoExplore/useTop10'
import { BarChartHorizontal } from './barchart-horizontal'
import { BarChartVertical } from './barchart-vertical'
import { CardLoading } from './custom-shared'
import { TimeGrainDropdown } from './time-grain-dropdown'

const CardsStatsExplore: React.FC = () => {
  const [{
    loading,
    exploreData: {
      top_10_repos: top10Repos,
      top_10_authors: top10Authors,
      file_last_modified: fileLastModified,
      repo_last_modified: repoLastModified
    }
  }] = useRepoExploreContext()

  const { top10AuthorsChart, top10ReposChart } = useTop10(top10Repos, top10Authors)
  const { xAxisRepo, timeGrainRepo, dataLastModifiedRepo, changeTimeGrainRepo } = useRepoLastModified(repoLastModified)
  const { xAxisFile, timeGrainFile, dataLastModifiedFile, changeTimeGrainFile } = useFileLastModified(fileLastModified)

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
                {top10AuthorsChart && <BarChartVertical data={top10AuthorsChart} dataKey='commitsCount' xAxisLabel='Commits' showIcon={false} />}
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>

      <div className='md_grid md_grid-cols-2 gap-6 space-y-4 md_space-y-0 pt-6'>
        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>Repo Last Modified</Label>
            <TimeGrainDropdown selected={timeGrainRepo} changeTimeGrain={changeTimeGrainRepo} />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>
                {dataLastModifiedRepo && <BarChartHorizontal data={dataLastModifiedRepo} dataKey='count' dataXAxis={xAxisRepo} />}
              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full w-2/4">
          <Panel.Header className='flex justify-between items-center'>
            <Label>File Last Modified</Label>
            <TimeGrainDropdown selected={timeGrainFile} changeTimeGrain={changeTimeGrainFile} />
          </Panel.Header>
          <Panel.Body>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs'>
                {dataLastModifiedFile && <BarChartHorizontal data={dataLastModifiedFile} dataKey='count' dataXAxis={xAxisFile} />}
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>
    </div>
  )
}

export default CardsStatsExplore
