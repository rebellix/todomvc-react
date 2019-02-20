import React, { Component } from 'react';
import InputForm from './InputForm';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
      items: [],
      itemsToShow: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleAllItems = this.toggleAllItems.bind(this);
    this.showAllItems = this.showAllItems.bind(this);
    this.showActiveItems = this.showActiveItems.bind(this);
    this.showCompletedItems = this.showCompletedItems.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
  }

  handleTextChange(text) {
    this.setState({ inputText: text });
  }

  addItem() {
    let newItem = {
      text: this.state.inputText,
      done: false
    };
    this.setState({ items: [newItem, ...this.state.items],
                    inputText: '' });
  }

  toggleItem(index) {
    this.setState( {items: this.state.items.map((item, i) => {
      if (i === index)
        item.done = !item.done;
      return item;
    })} );
  }

  removeItem(name) {
    this.setState({ items: this.state.items.filter(item => item.text !== name) });
  }

  toggleAllItems() {
    if (this.state.items.some(item => item.done === false)) {
      this.setState( {items: this.state.items.map(item => {
        item.done = true;
        return item;
      })} );
    } else {
      this.setState( {items: this.state.items.map(item => {
        item.done = false;
        return item;
      })} );
    }          
    console.log(this.state.items);
  }

  showAllItems() {
    this.setState({ itemsToShow: 'all' });
  }

  showActiveItems() {
    this.setState({ itemsToShow: 'active' });
  }

  showCompletedItems() {
    this.setState({ itemsToShow: 'completed' });
  }

  clearCompletedItems() {
    this.setState({ items: this.state.items.filter(item => !item.done) });
  }


  render() {
    const counter = this.state.items.reduce((acc, item) => !item.done ? acc + 1 : acc, 0);
    const itemsToRender = this.state.items.filter(item => {
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
      <div>
        <InputForm
          inputText={this.state.inputText}
          onTextChange={this.handleTextChange}
          onHandleItem={this.addItem}
          onToggleAll={this.toggleAllItems}
        />
        <TodoList
          todos={itemsToRender}
          onRemoveTodo={this.removeItem}
          onToggleTodo={this.toggleItem}
        />
        <FilterBar 
          numOfUncompleted={counter}
          onShowAll={this.showAllItems}
          onShowActive={this.showActiveItems}
          onShowCompleted={this.showCompletedItems}
          onClearCompleted={this.clearCompletedItems}
        />
      </div>
    );
  }
}

export default App;
