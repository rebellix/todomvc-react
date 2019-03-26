import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, removeItem, toggleItem }) => {
	const items = todos.map((item, index) => 
		<li 
			className="list-group-item"
			key={index}
		>
			<button
				className="btn btn-light circle" 
				onClick={ () => toggleItem(index)} 
			>
				<i className={item.done ? 'fas fa-check completed' : 'fas fa-check'}></i>    
			</button>
			<div className="content-box">
				<span className={item.done ? 'item-content item-completed' : 'item-content'}>{item.text}</span>
			</div>
			<button
				className="btn btn-light no-border hidden"  
				onClick={ () => removeItem(item.text)} 
			>
				<i className="fas fa-times"></i>    
			</button>
		</li>
		);
		
		return (
						<ul className="list-group">
								{ items }
						</ul>
		);
}

export default TodoList;