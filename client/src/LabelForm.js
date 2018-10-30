import React, { Component } from 'react';

class LabelForm extends React.Component {
	constructor(props) {
    	super(props);
	}

  	render() {
  		return (
  			<div className="form-inline">
	  			<div className="form-group mb-2">
			    	<label htmlFor={this.props.key}>{this.props.title}</label>
			    </div>

	  			<div className="form-group mx-sm-3 mb-2">
		      		<input 
		      			type="text" 
			      		id={this.props.finder} 
			      		className="form-control form-control-sm"  
			      		defaultValue='' 
			      		onChange={this.props.handleChange} 
			      		placeholder={this.props.title} 
		      		/>
		      	</div>
	      	</div>
	    );
  	}
}

export default LabelForm;