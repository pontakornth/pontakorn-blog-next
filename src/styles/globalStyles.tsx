import { DefaultThemeMap } from '@stitches/react'

import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss, CSS } from '../../stitches.config'

const customStyles = {
  body: {
    ...tw`antialiased dark:(bg-gray-800 text-gray-400) transition-colors`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export default styles
