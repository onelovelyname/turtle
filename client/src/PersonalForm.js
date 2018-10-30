import React, { Component } from 'react';
import LabelForm from './LabelForm.js';
import DropdownForm from './DropdownForm.js';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: '',
    	lastName: '',
    	email: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	console.log(event.target.id);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      	<form onSubmit={this.handleSubmit}>
      	   	<h2>Caretaker Information</h2>
		    <LabelForm title="First Name" finder="firstName" handleChange={this.handleChange} />
		    <LabelForm title="Last Name" finder="lastName" handleChange={this.handleChange} />
		    <LabelForm title="Email" finder="email" handleChange={this.handleChange} />

  	   		<h2>Payment</h2>
	        <DropdownForm title="Card Type" finder="cardType" items={['Visa', 'Mastercard', 'American Express', 'Discover']} handleChange={this.handleChange} />
	        <LabelForm title="Card Number" finder="cardNumber" handleChange={this.handleChange} />
		    <DropdownForm title="Expiration Month" finder="exMonth" items={['Jan', 'Feb', 'Mar', 'Apr', 'May']} handleChange={this.handleChange} />
		    <DropdownForm title="Expiration Year" finder="exYear" items={['2018', '2019', '2020', '2021', '2022']} handleChange={this.handleChange} />
	        <LabelForm title="CSC" finder="csc" handleChange={this.handleChange} />

  	   		<h2>Billing Information</h2>	        
	        <LabelForm title="Country" finder="country" handleChange={this.handleChange} />
	        <LabelForm title="Address Line 1" finder="address1" handleChange={this.handleChange} />
	        <LabelForm title="Address Line 2" finder="address2" handleChange={this.handleChange} />
	        <LabelForm title="Town/City" finder="city" handleChange={this.handleChange} />
	        <LabelForm title="State/Province" finder="state" handleChange={this.handleChange} />
	        <LabelForm title="Postal Code" finder="postalCode" handleChange={this.handleChange} />

	        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
      	</form>
    );
  }
}

export default PersonalForm;