import type { AppProps } from "next/app"
import LayoutWrapper from "src/layouts/LayoutWrapper"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
