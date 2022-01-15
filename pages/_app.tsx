import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import themes from 'theme'

import GlobalStyles from './App.styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={themes.defaultTheme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
