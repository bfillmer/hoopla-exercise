
import React from 'react'
import styled from 'styled-components'

import {getTheme} from 'view/theme'

// TITLE COMPONENTS
const LI = styled.li`
  text-align: center;
  width: 20%;
  padding-left: ${getTheme('paddings', 'half')};
  padding-right: ${getTheme('paddings', 'half')};
  margin-bottom: ${getTheme('margins', 'base')};
`

const Img = styled.img`
  border: 2px solid ${getTheme('colors', 'grays', 'dark')};
`

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  color: ${getTheme('colors', 'grays', 'dark')};
`

const P = styled.p`
  color: ${getTheme('colors', 'grays', 'medium')};
`

// TITLE COMPOSITION
export const Title = ({title, artistName, artKey}) => (
  <LI>
    <Img src={`https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`} alt={`${title} Cover`} />
    <H3>{title}</H3>
    <P>{artistName}</P>
  </LI>
)
