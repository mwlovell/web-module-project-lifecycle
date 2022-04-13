import React from 'react'

export default class Todo extends React.Component {
  constructor(){
    super()
}

  render() {
    const { todo } = this.props;
    return(
      <div className="todo-list">
      {/* {props.todos.map(item => (
        <Item toggleItem={props.toggleItem} key={item.id} item={item} />
       )) } */}
    </div>
  );
};
}