import type { NextPage } from 'next'
import Head from 'next/head'
import Editor from '@monaco-editor/react'
import { Fragment, useRef, useEffect } from 'react'

import { Avatar, Button, Toolbar } from '@mergestat/blocks'
import { CircleInformationIcon } from '@mergestat/icons'

const Queries: NextPage = () => {
  const query = `-- AskGit is a tool for running SQL queries on data in git repos:
  -- https://github.com/augmentable-dev/askgit
  -- Use this page to try out queries in your browser, URLs are share-able

  SELECT author_name, count(*) FROM commits GROUP BY author_name ORDER BY count(*) DESC
  `

  const resizeElement = useRef<HTMLDivElement | null>(null)
  const resizerElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (resizeElement?.current) {
        const resizeHight = e.clientY - resizeElement.current.offsetTop + 'px'
        resizeElement.current.style.height = resizeHight
      }
    }

    const handleStopResize = () => {
      window.removeEventListener('mousemove', handleResize, false)
      window.removeEventListener('mouseup', handleStopResize, false)
    }

    const initResize = () => {
      window.addEventListener('mousemove', handleResize, false)
      window.addEventListener('mouseup', handleStopResize, false)
    }

    resizerElement?.current?.addEventListener('mousedown', initResize, false)

    return () => {
      resizerElement?.current?.removeEventListener(
        'mousedown',
        initResize,
        false
      )
      window.removeEventListener('mousemove', handleResize)
      window.removeEventListener('mouseup', handleStopResize)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
        {/* Header */}
        <div className='bg-white h-16 w-full border-b px-8'>
          <Toolbar className='h-full'>
            <Toolbar.Left>
              <h2 className='t-h2 mb-0'>Queries</h2>
            </Toolbar.Left>
            <Toolbar.Right>
              <Button skin='secondary' label='Cancel' disabled />
              <Button label='Execute (Shift + R)' />
            </Toolbar.Right>
          </Toolbar>
        </div>
        <div className='flex flex-col flex-1 items-center overflow-auto'>
          {/* SQL editor */}
          <div className='w-full p-8' ref={resizeElement} style={{ height: '320px', minHeight: '200px' }}>
            <div className='h-full flex relative py-4 bg-white rounded-t border border-gray-300'>
              <Editor
                className='text-sm font-mono'
                value={query}
                language='sql'
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollbar: {
                    vertical: 'auto',
                  },
                }}
              />
            </div>
          </div>
          <div className='t-resizer' ref={resizerElement} />
          <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
            <Avatar icon={<CircleInformationIcon className='t-icon ' />} />
            <p className='text-semantic-mutedText mt-6'>
              Execute query to show results.
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Queries
