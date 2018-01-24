
import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {Title} from 'view/Home/Title'

const TitleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// For this use case we'll just map the titles to their id in one go here. With larger or faster
// updating data (socket data, etc) we would connect each Title to it's own specific slice of
// the store, allowing the titles to update individually and not re-render the entire list unless
// the id array changes.
const mapStateToProps = state => ({
  titles: state.titles.allIds.map(id => state.titles.byId[id])
})

const Container = ({titles}) => {
  const renderTitles = titles.map(title => <Title key={title.titleId} {...title} />)
  return (
    <TitleList>
      {renderTitles}
    </TitleList>
  )
}

export const Grid = connect(mapStateToProps)(Container)
