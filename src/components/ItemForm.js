import React from 'react';

class ItemForm extends React.Component{
  defaultValue = { name: ''}
  state = { ...this.defaultValue }

  onChange = (e) => {
    this.setState({name: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    let name = this.state
    this.props.addItem(name)
    this.setState(this.defaultValue)
  }

  render(){
    let {name} = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input value={name} placeholder='Enter New Item' onChange={this.onChange} />
      </form>
    )
  }
}

export default ItemForm;
