import React, { Component, PropTypes } from 'react';

const BUTTON_TYPES = [
    'submit',
    'button',
];

class Button extends Component {

    /** @properties {Default set up} */
    static defaultProps = {
        type: 'button',
        onClick: null,
        label: null,
        isDisabled: false,
    };


    onClick = (ev) => {
        ev.preventDefault();
        const { name } = this.props;
        if (this.props.onClick && name) {
            this.props.onClick(name);
        }
    }
    render() {
        const { label, type, onClick,
            isDisabled } = this.props;
        // Entire ReactDOM
        return (
            <button
                disabled={isDisabled}
                type={type}
                onClick={this.onClick}
                >{label}</button>
        );
    }
}
export default Button;
