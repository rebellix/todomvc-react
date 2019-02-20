import React, { Component } from 'react';

class TodoList extends Component {
    toggleItem(index) {
        this.props.onToggleTodo(index);
    }
    
    removeItem(name) {
        this.props.onRemoveTodo(name);
    }

	render(){
        const items = this.props.todos;
        const todos = items                        
                        .map((item, index) => <li key={index}>
                                                    <button onClick={ () => { this.toggleItem(index)} }>O</button>
                                                    <span>{item.text}</span>
                                                    <button onClick={ () => { this.removeItem(item.text)} }>X</button>
                                                </li>);
		return (
            <ul>
                {todos}
            </ul>
		);
	}
}

export default TodoList;