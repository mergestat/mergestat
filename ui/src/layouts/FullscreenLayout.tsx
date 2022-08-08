import React, { Fragment } from 'react'

type FullscreenLayoutProps = {
  children?: React.ReactNode
}

const FullscreenLayout: React.FC<FullscreenLayoutProps> = (props: FullscreenLayoutProps) => {
  return <Fragment>{props?.children}</Fragment>
}

export default FullscreenLayout
