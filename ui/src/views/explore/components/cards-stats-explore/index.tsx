import { Panel, Tooltip } from '@mergestat/blocks'
import { CircleInformationFilledIcon } from '@mergestat/icons'
import { MonthData, YearData } from 'src/api-logic/mappers/charts/recharts'
import { useExploreContext } from 'src/state/contexts/repo-explore.context'
import { useFileLastModified } from 'src/views/hooks/explore/useFileLastModified'
import { useRepoLastModified } from 'src/views/hooks/explore/useRepoLastModified'
import { useTop10 } from 'src/views/hooks/explore/useTop10'
import { BarChartHorizontal } from './components/barchart-horizontal'
import { BarChartVertical } from './components/barchart-vertical'
import { CardLoading } from './components/custom-shared'
import { TimeGrainDropdown } from './components/time-grain-dropdown'

const CardsStatsExplore: React.FC = () => {
  const [{
    loading,
    exploreData: {
      top_10_repos: top10Repos,
      top_10_authors: top10Authors,
      file_last_modified: fileLastModified,
      repo_last_modified: repoLastModified
    }
  }] = useExploreContext()

  const { top10AuthorsChart, top10ReposChart } = useTop10(top10Repos, top10Authors)
  const { xAxisRepo, timeGrainRepo, dataLastModifiedRepo, changeTimeGrainRepo } = useRepoLastModified(repoLastModified)
  const { xAxisFile, timeGrainFile, dataLastModifiedFile, changeTimeGrainFile } = useFileLastModified(fileLastModified)

  const getWidth = (data: MonthData[] | YearData[]) => {
    if (data) {
      const dataSize = data.length
      if (dataSize < 15) {
        return '100%'
      } else if (dataSize > 15) {
        return `${dataSize * 2}rem`
      }
    } else {
      return '100%'
    }
  }

  return (
    <div className='pt-6'>
      <div className='lg_grid lg_grid-cols-2 gap-6 space-y-4 lg_space-y-0'>
        <Panel className="w-full">
          <Panel.Header className='flex justify-between items-center'>
            <h3 className='t-panel-title'>Top 10 Repos by File Matches <Tooltip content={<span className="font-normal">Repos by number of file matches</span>}><CircleInformationFilledIcon className="t-icon t-icon-info inline-block align-middle" /></Tooltip></h3>
          </Panel.Header>
          <Panel.Body className='overflow-hidden'>
            {loading
              ? <CardLoading />
              : <div className='flex justify-center min-h-xs'>
                {top10ReposChart && <BarChartVertical data={top10ReposChart} dataKey='fileCount' xAxisLabel='File Count' />}
              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full">
          <Panel.Header className='flex justify-between items-center'>
            <h3 className='t-panel-title'>Top 10 Authors by Commits <Tooltip content={<span className="font-normal">Authors by number of commits that havemodified matching files</span>}><CircleInformationFilledIcon className="t-icon t-icon-info inline-block align-middle" /></Tooltip></h3>
          </Panel.Header>
          <Panel.Body className='overflow-hidden'>
            {loading
              ? <CardLoading />
              : <div className='flex justify-center min-h-xs'>
                {top10AuthorsChart && <BarChartVertical data={top10AuthorsChart} dataKey='commitsCount' xAxisLabel='Commits' showIcon={false} />}
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>

      <div className='lg_grid lg_grid-cols-2 gap-6 space-y-4 lg_space-y-0 pt-6'>
        <Panel className="w-full">
          <Panel.Header className='flex justify-between items-center'>
            <h3 className='t-panel-title'>Repo Last Modified</h3>
            <TimeGrainDropdown selected={timeGrainRepo} changeTimeGrain={changeTimeGrainRepo} />
          </Panel.Header>
          <Panel.Body className='overflow-x-auto ml-4 mr-6 px-0'>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs' style={{ minWidth: getWidth(dataLastModifiedRepo) }}>
                {dataLastModifiedRepo && <BarChartHorizontal data={dataLastModifiedRepo} dataKey='count' dataXAxis={xAxisRepo} />}
              </div>
            }
          </Panel.Body>
        </Panel>

        <Panel className="w-full">
          <Panel.Header className='flex justify-between items-center'>
            <h3 className='t-panel-title'>File Last Modified</h3>
            <TimeGrainDropdown selected={timeGrainFile} changeTimeGrain={changeTimeGrainFile} />
          </Panel.Header>
          <Panel.Body className='overflow-x-auto ml-4 mr-6 px-0'>
            {loading
              ? <CardLoading />
              : <div className='flex justify-between min-h-xs' style={{ minWidth: getWidth(dataLastModifiedFile) }}>
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
