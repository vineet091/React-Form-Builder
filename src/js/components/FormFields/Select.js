import React from "react";

class Select extends React.Component {
    static defaultProps = {
        type: 'text',
        required: false,
        label: '',
        id: '',
        name: '',
        placeholder: '',
        onBlur: null,
        options: [],
        onChange: () => {},
        value: null,
    };

    /* eslint-disable no-useless-constructor */
    constructor() {
        super();
    }

    onChange = (event) => {
        const { name } = this.props;
        if (this.props.onChange && event && event.target) {
            this.props.onChange(name, event.target.value);
        }
    }

    onBlur = (event) => {
        if (this.props.onBlur) {
            this.props.onBlur(event.target.value);
        }
    }

    render() {
        const { id,
                type,
                name,
                label,
                placeholder,
                value,
                required,
                options } = this.props;

        const opts = {};
        opts.required = required;
        opts.value = value;
        let optionElements = [] 
        options.map((optn, index) =>{
           optionElements.push(<option value={optn.value} selected={optn.value === value}>{optn.label}</option>)
        }) 
        return (<div>
                <label>{label}</label>
                <select
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    {...opts}
                >{optionElements}
                </select>
                </div>
        );
    }
}

export default Select;
