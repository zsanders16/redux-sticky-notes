import React from 'react';
import { connect } from 'react-redux';
import Note from './Note'
import { Grid } from 'semantic-ui-react'

const List = ({notes}) => {
  return(
    <Grid columns={3} divided>
      <Grid.Row>
        { notes.map( (n) => <Note key={n.id} {...n} />)}
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return ({ notes: state.notes })
}

export default connect(mapStateToProps)(List);
