import React from "react";
import { connect } from "react-redux"
import Button from "./FormFields/Button";
import Input from "./FormFields/Input";
import Select from "./FormFields/Select";
import RadioButton from "./FormFields/Radio";


const INPUT_TYPES = ['text', 'number', 'password']
const BUTTON_TYPES = [
    'submit',
    'button',
];

export default class Excel extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: [
			  {
			      name: 'username',
			      label: 'Username',
			      type: 'text',
			      required: true,
			  }, {
			      name: 'password',
			      label: 'Password',
			      type: 'password',
			      required: true,
			  }, {
				label: 'Age',
				name: 'age',
				placeholder: 'Select Age',
				type: 'select',
				required: true,
				options: [
				  {label: 'One', value: 1},
				  {label: 'Two', value: 2},
				   {label: 'Three', value: 3},			  	
				]
			  },  {
				  label: 'remember me',
				  name: 'rememberme',
				  type: 'radio',
			  },  {
			      label: 'Submit',
			      type: 'submit',
			      name: 'submit',
			  }
			],
			formData: {
				userName: '',
				password: '',
				age: 2,
				rememberme: false,				
			}
		}
	}

    handleChange = (type, value) => {
       const {formData } = this.state
       formData[type] = value
       this.setState({ formData })
    }

    handleClick = (type, value) => {
    	const { formData, fields } = this.state
    	let isValid = true;
	    if (type === 'submit') {
		    fields.map(function(data, index) {	
		    	if (data.required && !formData[data.name]) {
		           alert(`${data.name} is required.`)         
		           isValid = false;
		    	}
		    })
		    if(isValid) {
	        	alert('Form submitted successfully.')
		    }  
	     } else {
		formData[type] = value
	        this.setState({ formData })
	     }

    }

    componentWillMount = () => {
    }
    
    render() {
    	const {fields, formData} = this.state
	    let tRowsElement = [], formElements = [];
		const that = this;
		fields.map(function(data, index) {	
		    if(INPUT_TYPES.indexOf(data.type) !== -1) {
               formElements.push(<Input key={index} name={data.name} label={data.label} type={data.type} value={formData[data.name]} onChange={that.handleChange} />); 		    	
		    } else if (BUTTON_TYPES.indexOf(data.type) !== -1)	{
                formElements.push(<Button key={index} name={data.name} label={data.label} type={data.type} value={formData[data.name]} onClick={that.handleClick} />); 		    	
		    }
		     else if (data.type === 'select')	{
               formElements.push(<Select key={index} name={data.name} label={data.label} type={data.type} value={formData[data.name]} options={data.options} onChange={that.handleChange} />); 		    	
		    } else if (data.type === 'radio')	{
               formElements.push(<RadioButton key={index} name={data.name} label={data.label} type={data.type} checked={formData[data.name]} onChange={that.handleChange} onClick={that.handleClick} />); 		    	
		    }
        });
    return (
        <div class="container">
            <div class="form-box">
	           <div class="form-title">
		        <h3 class="title">Login</h3>
	           </div>
	           <div class="form-content">
			<div class="form-wrapper">
		             <form>
			        {formElements}
			     </form>
			</div>
        	   </div>
	     </div>
        </div>
    );
  }
}
