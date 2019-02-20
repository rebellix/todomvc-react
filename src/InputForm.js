import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleTextChange(e) {
        this.props.onTextChange(e.target.value);
    }

    addItem(e) {
        e.preventDefault();
        this.props.onHandleItem();

    }
    
    render(){
        const newItemText = this.props.inputText;
		return (
            <form onSubmit={this.addItem}>
                <input 
                    placeholder="Add new item..." 
                    value={newItemText} 
                    onChange={this.handleTextChange}/>           
            </form>
		);
	}
}

export default InputForm;