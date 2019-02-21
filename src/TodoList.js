import React, { Component } from 'react';

class TodoList extends Component {
    toggleItem = (index) => this.props.onToggleTodo(index);
    
    removeItem = (name) => this.props.onRemoveTodo(name);

	render(){
        const items = this.props.todos;
        const todos = items                        
                        .map((item, index) => <li 
                                                className="list-group-item"
                                                key={index}>
                                                    <button
                                                        className="btn btn-light circle" 
                                                        onClick={ () => { this.toggleItem(index)} }>
                                                        <i className={item.done ? 'fas fa-check completed' : 'fas fa-check'}></i>    
                                                    </button>
                                                    <span className={item.done ? 'item-content item-completed' : 'item-content'}>{item.text}</span>
                                                    <button
                                                        className="btn btn-light hidden"  
                                                        onClick={ () => { this.removeItem(item.text)} }>
                                                        <i className="fas fa-times"></i>    
                                                    </button>
                                                </li>);
		return (
            <ul className="list-group">
                {todos}
            </ul>
		);
	}
}

export default TodoList;