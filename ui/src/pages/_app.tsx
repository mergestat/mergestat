import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import LayoutWrapper from 'src/layouts/LayoutWrapper'
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </QueryClientProvider>
  )
}

export default MyApp
