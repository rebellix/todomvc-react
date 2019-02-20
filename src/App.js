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
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleAllItems = this.toggleAllItems.bind(this);
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
    console.log(this.state.items);
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


  render() {
    return (
      <div>
        <InputForm
          inputText={this.state.inputText}
          onTextChange={this.handleTextChange}
          onHandleItem={this.addItem}
          onToggleAll={this.toggleAllItems}
        />
        <TodoList
          todos={this.state.items}
          onRemoveTodo={this.removeItem}
          onToggleTodo={this.toggleItem}
        />
        <FilterBar />
      </div>
    );
  }
}

export default App;
