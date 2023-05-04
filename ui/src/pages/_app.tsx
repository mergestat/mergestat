import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import AppWrapper from './AppWrapper'

const MyApp = (props: AppProps) => {
  const apolloClient = useApollo(props.pageProps.initialApolloState)
  useEffect(() => { document.body.classList.add('overflow-hidden') })

  return (
    <ApolloProvider client={apolloClient}>
      <AppWrapper {...props} />
    </ApolloProvider>
  )
}

export default MyApp
