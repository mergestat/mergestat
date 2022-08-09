import React, { Fragment, PropsWithChildren } from 'react'

const FullscreenLayout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return <Fragment>{props?.children}</Fragment>
}

export default FullscreenLayout
