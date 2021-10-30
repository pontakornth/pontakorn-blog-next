import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import globalStyles from '../styles/globalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
