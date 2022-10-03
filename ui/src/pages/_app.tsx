import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'
import type { AppProps } from 'next/app'
import LayoutWrapper from 'src/layouts/LayoutWrapper'
import '@blueprintjs/table/lib/css/table.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ApolloProvider>
  )
}

export default MyApp
