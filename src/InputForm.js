import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    handleTextChange(e) {
        this.props.onTextChange(e.target.value);
    }

    addItem(e) {
        e.preventDefault();
        this.props.onHandleItem();
    }
    
    toggleAll() {
        this.props.onToggleAll();
    }

    render(){
        const newItemText = this.props.inputText;
        const placeholder = 'What needs to be done?';
		return (
            <div>
                <button onClick={() => { this.toggleAll()} }>Y</button>
                <form onSubmit={this.addItem}>                
                    <input 
                        placeholder={placeholder} 
                        value={newItemText} 
                        onChange={this.handleTextChange}/>           
                </form>
            </div>
		);
	}
}

export default InputForm;