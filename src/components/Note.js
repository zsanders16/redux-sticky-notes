import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import ItemForm from './ItemForm';
import { Grid, Card, Feed, Container } from 'semantic-ui-react'


const styles = {
  cards: {
    marginTop: '20px',
  }
}

class Note extends React.Component{
  state = { items: []}

  addItem = (item) => {
    let { items, itemId } = this.state
    this.setState({ items: [...items, item]})
  }

  render(){
    let { id, title } = this.props
    let { items, itemId } = this.state
    return(
        <Grid.Column style={styles.cards}>
          <Card color='teal'>
            <Card.Content>
              <Card.Header>
                {title}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      {items.map( (i, index) => <Item key={index} item={i}/>)}
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
            <Container textAlign='center'>
              <ItemForm addItem={this.addItem} />
            </Container>
          </Card>
        </Grid.Column>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes}
}

export default connect(mapStateToProps)(Note);
