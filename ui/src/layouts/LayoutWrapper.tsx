import React from 'react'
import { pathOr } from 'ramda'
import { ErrorBoundary } from 'react-error-boundary'

import FullscreenLayout from './FullscreenLayout'
import SidebarLayout from './SidebarLayout'

import { ErrorFallback, MyErrorHandler } from '../components/ErrorBoundary'

type LayoutProps = {
  children?: {
    type: {
      layout: string | undefined
    }
  }
}

type LayoutWrapperPropsT = {
  children?: React.ReactNode
}

const layouts = {
  default: SidebarLayout,
  fullscreen: FullscreenLayout,
}

const LayoutWrapper = (props: LayoutWrapperPropsT): JSX.Element => {
  const type = pathOr('default', ['children', 'type', 'layout'], props)

  const Layout: React.FC<LayoutProps> = layouts[type]

  return (
    <Layout {...props}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorHandler}>
        {props?.children}
      </ErrorBoundary>
    </Layout>
  )
}

export default LayoutWrapper
