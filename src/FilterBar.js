import React, { Component } from 'react';

class FilterBar extends Component {
    showAll() {
        this.props.onShowAll();
    }

    showActive() {
        this.props.onShowActive();
    }

    showCompleted() {
        this.props.onShowCompleted();
    }

    clearCompleted() {
        this.props.onClearCompleted();
    }

	render(){
        return (
            <section>
                <span>{this.props.numOfUncompleted} items left</span>
                <div>
                    <button onClick={ () => {this.showAll()} }>All</button>
                    <button onClick={ () => {this.showActive()} }>Active</button>
                    <button onClick={ () => {this.showCompleted()} }>Completed</button>
                </div>
                <button onClick={ () => {this.clearCompleted()} }>Clear completed</button>
            </section>
        );
    }
}

export default FilterBar;