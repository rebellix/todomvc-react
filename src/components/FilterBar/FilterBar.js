import React from 'react';
import './FilterBar.css';

const FilterBar = ({ numOfUncompleted, showAll, showActive, showCompleted, clearCompleted }) => {
				return (
						<div className="btn-group" role="group">
								<button className="btn btn-light">
									{numOfUncompleted} items left
								</button>
								<div className="filter-section">
										<button 
												className="btn btn-light"
												onClick={() => showAll()}
										>
											All
										</button>
										<button 
												className="btn btn-light"
												onClick={() => showActive()}
										>
											Active
										</button>
										<button 
												className="btn btn-light"
												onClick={() => showCompleted()}>
											Completed
										</button>
								</div>
								<button 
										className="btn btn-light"
										onClick={() => clearCompleted()}
								>
									Clear completed
								</button>
						</div>
				);
}

export default FilterBar;