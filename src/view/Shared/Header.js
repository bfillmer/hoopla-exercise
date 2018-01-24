
import React from 'react'
import styled from 'styled-components'

import {H1} from 'view/Shared/Typography'

// HEADER COMPONENTS
const Wrapper = styled.header`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

// HEADER COMPOSITION
export const Header = ({name}) => (
  <Wrapper>
    <H1>Hoopla Titles</H1>
  </Wrapper>
)
