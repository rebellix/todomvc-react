import React from 'react';
import './InputForm.css';

const InputForm = ({ inputText, handleTextChange, addItem, toggleAllItems }) => {
	const placeholder = 'What needs to be done?';
	
	return (
			<form 
				onSubmit={(e) => {
					e.preventDefault();
					addItem(e);
				}}>
					<div className="input-group sm-12">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input
										onClick={() => toggleAllItems()} 
										type="checkbox" 
										aria-label="Checkbox for following text input" />
								</div>
							</div>							
							<input
								type="text" 
								className="form-control" 
								aria-label="Text input with checkbox"
								placeholder={placeholder}
								value={inputText}
								onChange={(e) => handleTextChange(e.target.value)}/>
					</div>
			</form>
		);
	}

export default InputForm;