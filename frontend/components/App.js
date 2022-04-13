import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

const fetchTodos = (todo) => {
  return axios.get(`http://localhost:9000/api/todos`)
  .then(res => {
      return res;
  })
  .catch(err => console.log('nooo, could not get the todos'))
}



  

export default class App extends React.Component {

  constructor(){
    super()
   
    this.state = {
        todos: [],
        currentTodo: 'laundry'
    }
  }

  componentDidMount() {
  
    fetchTodos(this.state.currentTodo)
        .then(res => {
            this.setState({
                todos: res.data.message
            })
        })
}
  render() {
    return (   
      <div className="App">
      <div className="header">
         <h1>Todo List</h1>
         {/* <ListForm addItem={this.addItem} /> */}
       </div>
      <TodoList 
          todos={this.state.todos} 
          toggleTodo={this.toggleTodo}

          />
      <button 
        className="clear-btn"
        onClick={this.clearPurchased}
        >
          Clear Purchased
      </button>
     </div>)
  }
}
