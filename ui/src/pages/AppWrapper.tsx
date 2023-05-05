import { AppProps } from 'next/app'
import { useMonacoProvider } from 'src/hooks/useMonacoProvider'
import LayoutWrapper from 'src/layouts/LayoutWrapper'

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  // Register SQL language suggestions just once
  useMonacoProvider()

  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default AppWrapper
