import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '~/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Height</title>

        <meta
          name="description"
          content="This is a clone from Height app, an app manage team tasks"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
