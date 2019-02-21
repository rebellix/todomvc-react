import React, { Component } from 'react';

class InputForm extends Component {

	handleTextChange = (e) => this.props.onTextChange(e.target.value);

	addItem = (e) => {
		e.preventDefault();
		this.props.onHandleItem();
	}

	toggleAll = () => this.props.onToggleAll();

	render(){
		const newItemText = this.props.inputText;
		const placeholder = 'What needs to be done?';
		return (
			<form 
				onSubmit={this.addItem}>
					<div className="input-group sm-12">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										onClick={this.toggleAll} 
										type="checkbox" 
										aria-label="Checkbox for following text input" />
								</div>
							</div>							
							<input
								type="text" 
								className="form-control" 
								aria-label="Text input with checkbox"
								placeholder={placeholder}
								value={newItemText}
								onChange={this.handleTextChange}/>
					</div>
			</form>
		);
	}
}

export default InputForm;