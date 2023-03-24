import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import { ContainerSyncsLogsProvider } from 'src/state/contexts/container-syncs-logs.context'
import ContainerSyncsDataView from 'src/views/repo-data-container/repository-data-details'
import useContainerBasicData from '../../../../../views/hooks/repoContainerSyncs/useContainerBasicData'

const DataTypePage = () => {
  const { loading, title, basicData } = useContainerBasicData()

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <ContainerSyncsLogsProvider>
          <ContainerSyncsDataView {...basicData} />
        </ContainerSyncsLogsProvider>
      }
    </Fragment>
  )
}

export default DataTypePage
