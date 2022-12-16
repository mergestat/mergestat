import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import useSyncsLogs from 'src/views/hooks/useSyncsLogs'
import RepoDataTypeView from 'src/views/repository-data-details'

const DataTypePage = () => {
  const { loading, repoData, title, syncTypeId, syncNow } = useSyncsLogs(true)

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <RepoDataTypeView {...repoData}
          syncNow={() => syncNow({
            variables: { syncId: syncTypeId, typeGroup: repoData.sync?.typeGroup }
          })}
        />
      }
    </Fragment>
  )
}

export default DataTypePage
