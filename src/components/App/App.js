import React, { Component } from 'react';
import InputForm from '../InputForm/InputForm';
import TodoList from '../TodoList/TodoList';
import FilterBar from '../FilterBar/FilterBar';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			inputText: '',
			items: [],
			itemsToShow: '',
		};
	}

	handleTextChange = (text) => this.setState({ 
		inputText: text 
	});

	addItem = () => {
		if (!this.state.inputText.trim()) {
			alert('nothing was added!');
			return;
		}
		else {
			const newItem = {
				text: this.state.inputText,
				done: false,
			};
			this.setState({
				items: [newItem, ...this.state.items],
				inputText: '',
			});
		}			
		
	}

	toggleItem = (index) => this.setState({
		items: this.state.items.map((item, i) => {
			if (i === index) { item.done = !item.done; }
			return item;
		}),
	});

	removeItem = (name) => this.setState({ 
		items: this.state.items.filter(item => item.text !== name) 
	});

	toggleAllItems = () => {
		if (this.state.items.some(item => item.done === false)) {
			this.setState({
				items: this.state.items.map((item) => {
					item.done = true;
					return item;
				}),
			});
		} 
		else {
			this.setState({
				items: this.state.items.map((item) => {
					item.done = false;
					return item;
				}),
			});
		}
	}

	showAllItems = () => this.setState({ 
		itemsToShow: 'all' 
	});

	showActiveItems = () => this.setState({ 
		itemsToShow: 'active' 
	});

	showCompletedItems = () => this.setState({ 
		itemsToShow: 'completed' 
	});

	clearCompletedItems = () => this.setState({ 
		items: this.state.items.filter(item => !item.done) 
	});

	render() {
		const counter = this.state.items.reduce((acc, item) => (item.done ? acc : acc + 1), 0);
		
		const itemsToRender = this.state.items.filter((item) => {
			switch (this.state.itemsToShow) {
			case 'active':
				return !item.done;
			case 'completed':
				return item.done;
			default:
				return item;
			}
		});
		
		return (
			<div className="container">
				<InputForm
					inputText={this.state.inputText}
					handleTextChange={this.handleTextChange}
					addItem={this.addItem}
					toggleAllItems={this.toggleAllItems}
				/>
				<TodoList
					todos={itemsToRender}
					removeItem={this.removeItem}
					toggleItem={this.toggleItem}
				/>
				<FilterBar
					numOfUncompleted={counter}
					showAll={this.showAllItems}
					showActive={this.showActiveItems}
					showCompleted={this.showCompletedItems}
					clearCompleted={this.clearCompletedItems}
				/>
			</div>
		);
	}
}

export default App;
