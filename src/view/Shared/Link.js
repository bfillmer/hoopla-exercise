
import React from 'react'

import {history} from 'router'

// Wrap hickory's navigate function for our Link component.
const makeLinkAction = href => e => {
  e.preventDefault()
  history.navigate(href)
}

export const Link = ({href, children}) => (
  <a href={href} onClick={makeLinkAction(href)}>{children}</a>
)
