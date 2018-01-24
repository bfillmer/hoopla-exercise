
import React from 'react'
import {connect} from 'react-redux'

import {Section} from 'view/Shared/Structural'

import {Grid} from 'view/Home/Grid'

const mapStateToProps = state => ({
  renderGrid: state.titles.allIds.length > 0
})

const Container = ({renderGrid}) => (
  <Section>
    {renderGrid && <Grid />}
  </Section>
)

export const Home = connect(mapStateToProps)(Container)
