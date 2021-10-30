import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import type { MDXProviderComponentsProp } from "@mdx-js/react"
import globalStyles from '../styles/globalStyles'
import { H1, H2, H3 } from '../components/elements/Heading'
import { ResponsiveImage } from '../components/elements/ResponsiveImage'

const components: MDXProviderComponentsProp = {
  h1: H1,
  h2: H2,
  h3: H3,
  // img: ResponsiveImage
}

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
