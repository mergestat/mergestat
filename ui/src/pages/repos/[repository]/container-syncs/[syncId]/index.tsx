import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import useContainerSyncsLogs from 'src/views/hooks/repoContainerSyncs/useContainerSyncsLogs'
import RepoDataTypeView from 'src/views/repo-data-container/repository-data-details'

const DataTypePage = () => {
  const { loading, repoData, title, syncId, syncNow } = useContainerSyncsLogs(true)

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <RepoDataTypeView {...repoData}
          syncNow={() => syncNow({
            // variables: { syncId, typeGroup: repoData.sync?.typeGroup }
          })}
        />
      }
    </Fragment>
  )
}

export default DataTypePage
