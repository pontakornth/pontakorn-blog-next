import { DefaultThemeMap } from '@stitches/react'

import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss, CSS } from '../../stitches.config'

const customStyles = {
  body: {
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export default styles
