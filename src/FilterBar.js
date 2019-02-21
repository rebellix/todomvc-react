import React, { Component } from 'react';

class FilterBar extends Component {
    showAll = () => this.props.onShowAll();

    showActive = () => this.props.onShowActive();

    showCompleted = () => this.props.onShowCompleted();

    clearCompleted = () => this.props.onClearCompleted();

	render(){
        return (
            <div className="btn-group" role="group">
                <button className="btn btn-light">{this.props.numOfUncompleted} items left</button>
                <div className="filter-section">
                    <button 
                        className="btn btn-light"
                        onClick={this.showAll}>All</button>
                    <button 
                        className="btn btn-light"
                        onClick={this.showActive}>Active</button>
                    <button 
                        className="btn btn-light"
                        onClick={this.showCompleted}>Completed</button>
                </div>
                <button 
                    className="btn btn-light"
                    onClick={this.clearCompleted}>Clear completed</button>
            </div>
        );
    }
}

export default FilterBar;