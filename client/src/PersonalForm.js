import React, { Component } from 'react';
import LabelForm from './LabelForm.js';
import DropdownForm from './DropdownForm.js';
import SectionHeading from './SectionHeading.js';
import Titles from './titles.js';

const stateData = {
	caretaker: {
		title: "Caretaker Information",
		items: {
			firstName: {title: 'First Name', type: "label"},
			lastName: {title: 'Last Name', type: "label"},
			email: {title: 'Email', type: "label"},
		}
	},
	payment: {
		title: "Payment",
		items: {
			cardType: {title: 'Card Type', type: "dropdown"},
			cardNumber: {title: 'Card Number', type: "label"},
			exMonth: {title: 'Expiration Month', type: "dropdown"},
			exYear: {title: 'Expiration Year', type: "dropdown"},
			csc: {title: 'CSC', type: "label"},
		}
	}, 
	billing: {
		title: "Billing Information",
		items: {
			country: {title: 'Country', type: "label"},
			address1: {title: 'Address Line 1', type: "label"},
			address2: {title: 'Address Line 2', type: "label"},
			city: {title: 'City', type: "label"},
			province: {title: 'State/Province', type: "label"},
			postalCode: {title: 'Postal Code', type: "label"}
		}
	}
};

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: '',
    	lastName: '',
    	email: '',
    	cardType: '',
    	cardNumber: '',
    	exMonth: '',
    	exYear: '',
    	csc: '',
    	country: '',
    	address1: '',
    	address2: '',
    	city: '',
    	province: '',
    	postalCode: '',
    	response: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendPayment = async () => {
    const response = await fetch('/payment', {
		  	method: 'POST',
		  	headers: {
		    	'Accept': 'application/json',
		    	'Content-Type': 'application/json',
		},
  			body: JSON.stringify(this.state)
	})
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    this.sendPayment()
      .then(res => this.setState({ response: res.payment }))
      .then(res => console.log(this.state.response))
      .catch(err => console.log(err))
    event.preventDefault();
  }

  render() {
  	const language = this.props.language;
    return (
    	<div className="container">
	      	<form onSubmit={this.handleSubmit}>
	      		
	      		<div className="row">
	      			<div className="col">
			      		<SectionHeading title={Titles['caretaker'][language]}/>
					    <LabelForm title="First Name" finder="firstName" handleChange={this.handleChange} />
					    <LabelForm title="Last Name" finder="lastName" handleChange={this.handleChange} />
					    <LabelForm title="Email" finder="email" handleChange={this.handleChange} />
				    </div>

				    <div className="col">
				      	<SectionHeading title={Titles['payment'][language]}/>
				        <DropdownForm title="Card Type" finder="cardType" items={['Visa', 'Mastercard', 'American Express', 'Discover']} handleChange={this.handleChange} />
				        <LabelForm title="Card Number" finder="cardNumber" handleChange={this.handleChange} />
					    <DropdownForm title="Expiration Month" finder="exMonth" items={['Jan', 'Feb', 'Mar', 'Apr', 'May']} handleChange={this.handleChange} />
					    <DropdownForm title="Expiration Year" finder="exYear" items={['2018', '2019', '2020', '2021', '2022']} handleChange={this.handleChange} />
				        <LabelForm title="CSC" finder="csc" handleChange={this.handleChange} />
		        	</div>
		        	<div className="col">
				      	<SectionHeading title={Titles['billing'][language]}/>
				        <LabelForm title="Country" finder="country" handleChange={this.handleChange} />
				        <LabelForm title="Address Line 1" finder="address1" handleChange={this.handleChange} />
				        <LabelForm title="Address Line 2" finder="address2" handleChange={this.handleChange} />
				        <LabelForm title="Town/City" finder="city" handleChange={this.handleChange} />
				        <LabelForm title="State/Province" finder="province" handleChange={this.handleChange} />
				        <LabelForm title="Postal Code" finder="postalCode" handleChange={this.handleChange} />
			        </div>	
	      		</div>
	      		<input className="btn btn-primary btn-lg" type="submit" value="Submit" />
	      	</form>
      	</div>
    );
  }
}

export default PersonalForm;