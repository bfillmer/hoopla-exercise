
import styled from 'styled-components'

import {getTheme} from 'view/theme'

// GLOBAL WRAPPER
export const Wrapper = styled.main`
  height: 100vh;
`

// PRIMARY CONTENT AREA
export const Section = styled.section`
  margin-left: ${getTheme('margins', 'base')};
  margin-right: ${getTheme('margins', 'base')};
`
