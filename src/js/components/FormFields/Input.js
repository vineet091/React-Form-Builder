import React, { Component, PropTypes } from 'react';

const INPUT_TYPES = ['text', 'number', 'password', 'email']

class Input extends Component {
    static defaultProps = {
        type: 'text',
        required: false,
        label: '',
        id: '',
        name: '',
        placeholder: '',
        onBlur: null,
        onChange: () => {},
        value: null,
    };

    /* eslint-disable no-useless-constructor */
    constructor() {
        super();
    }

    onChange = (event) => {
        const { name, onChange } = this.props;
        if (onChange && event && event.target) {
            onChange(name, event.target.value);
        }
    }

    onBlur = (event) => {
        const { onBlur } = this.props;
        if (onBlur) {
            onBlur(event.target.value);
        }
    }

    render() {
        const { id,
                type,
                name,
                label,
                placeholder,
                value,
                required } = this.props;

        const opts = {};
        opts.required = required;
        opts.value = value;

        return (<div>
                <label>{label}</label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    {...opts}
                />
                </div>
        );
    }
}

export default Input;
