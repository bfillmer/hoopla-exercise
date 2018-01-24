
import styled from 'styled-components'

import {getTheme} from 'view/theme'

export const H1 = styled.h1`
  margin-bottom: ${getTheme('margins', 'base')};
`

export const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: ${getTheme('margins', 'base')};
`

export const UL = styled.ul`
  margin-bottom: ${getTheme('margins', 'base')};
`

export const P = styled.p`
  margin-bottom: ${getTheme('margins', 'base')};
`
