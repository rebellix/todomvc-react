import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render(){
        const items = this.props.items;
        const todos = items.map(item => <TodoItem name={item} />)
		return (
            <ul>
                {todos}
            </ul>
		);
	}
}

export default TodoList;