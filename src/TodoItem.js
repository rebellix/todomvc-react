import React, { Component } from 'react';

class TodoItem extends Component {
	render(){
		const name = this.props.name;
		return (
			<li>
				<th colSpan="2">{name}</th>
			</li>
		);
	}
}

export default TodoItem;