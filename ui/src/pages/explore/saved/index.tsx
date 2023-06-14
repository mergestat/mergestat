import { ChartSquareBarIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const SavedExplorePage: NextPage = () => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    const crumbs = [
      {
        text: 'Explore',
        startIcon: <ChartSquareBarIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/explore'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const title = `Saved Explore ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

    </Fragment>
  )
}

export default SavedExplorePage
