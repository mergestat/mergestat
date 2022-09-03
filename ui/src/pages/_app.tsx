import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'
import type { AppProps } from 'next/app'
import LayoutWrapper from 'src/layouts/LayoutWrapper'
import { GeneralProvider } from 'src/state/contexts'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <GeneralProvider>
        <LayoutWrapper {...pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </GeneralProvider>
    </ApolloProvider>
  )
}

export default MyApp
