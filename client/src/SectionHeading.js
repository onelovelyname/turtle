import React, { Component } from 'react';

class SectionHeading extends React.Component {

  	render() {
  		return (
      	   	<h2 className="text-left mt-4">{this.props.title}</h2>
	    );
  	}
}

export default SectionHeading;