import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import LayoutWrapper from 'src/layouts/LayoutWrapper'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  useEffect(() => { document.body.classList.add('overflow-hidden') })

  return (
    <ApolloProvider client={apolloClient}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ApolloProvider>
  )
}

export default MyApp
