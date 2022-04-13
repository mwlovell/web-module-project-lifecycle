import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  state = {
    todos:[]
  }
  render() {
    const { name } = this.state;
    return(
      <div>
        <h1> {todos}.</h1>
        {/* <button onClick={this.handleNameButtonClick}>MAKE IT ALLISON</button> */}
      </div>
    );
  }
}
