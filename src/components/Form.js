import React from 'react';
import { connect } from 'react-redux';
import { add_note} from '../actions/notes';
import { incId } from '../actions/nextId';


class Form extends React.Component{
  state = { title: '' }

  onChange = (e) => {
    this.setState({ title: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let { dispatch, id } = this.props;
    let { title } = this.state;
    let note = { id, title }
    dispatch( add_note(note))
    dispatch(incId())
    this.setState({ title: '' })
  }



  render(){
    let { title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input value={title} placeholder='New Note Title' onChange={this.onChange} />
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(Form);
