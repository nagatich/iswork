import 'styled-components'

import defaultTheme from 'theme/defaultTheme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
