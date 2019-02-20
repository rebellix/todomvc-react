import React, { Component } from 'react';
import InputForm from './InputForm';
import TodoList from './TodoList';
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
  }

  handleTextChange(text) {
    this.setState({ inputText: text });
  }

  addItem() {
    let newItem = this.state.inputText;
    this.setState({ items: [...this.state.items, newItem] });
    this.setState({ inputText: '' });
  }

  render() {
    return (
      <div>
        <InputForm
          inputText={this.state.inputText}
          onTextChange={this.handleTextChange}
          onHandleItem={this.addItem}
        />
        <TodoList
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
