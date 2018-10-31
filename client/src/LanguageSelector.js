import React, { Component } from 'react';
import LabelForm from './LabelForm.js';
import DropdownForm from './DropdownForm.js';
import SectionHeading from './SectionHeading.js';

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      updateLanguage: props.updateLanguage
    }
  }

  handleChange(event) {
    this.state.updateLanguage(event.target.value);
  }

  render() {
    return (
      <div className="container">
      <div className="row justify-content-md-center">
			 <div className="col">
			   <DropdownForm title="Language Selection" finder="cardType" items={['English', 'Spanish']} handleChange={this.handleChange} />
	     </div>
       </div>
       </div>
    );
  }
}

export default LanguageSelector;