import React, { Component } from 'react';

class DropdownForm extends React.Component {
	constructor(props) {
    	super(props);
		const listItems = props.items.map((item, key) =>
			<option key={key} value={item}>{item}</option>
		);
		this.state = {items: listItems};
	}

  	render() {
  		return (
  			<div className="form-inline">
  				<div className="form-group mb-2">
  					<label id={this.props.title}>{this.props.title}</label>
  				</div>
  				<div className="form-group mx-sm-3 mb-2">
					<select className="form-control form-control-sm" id={this.props.title}>
						{this.state.items}
					</select>
				</div>
  			</div>
	    );
  	}
}

export default DropdownForm;