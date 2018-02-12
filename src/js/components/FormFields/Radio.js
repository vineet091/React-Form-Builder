import React, { Component, PropTypes } from 'react';

/**
 * Radio Button component to standardize the styling and html structure of radio button component on the page
 * This supports "radioType: type of radio button" such as default or error
* */
class RadioButton extends Component {


  /** @properties {Default set up} */
    static defaultProps = {
        name: '',
        value: '',
        label: '',
        checked: undefined,
        isDisabled: false,
        onClick: () => {},
        onChange: () => {},
    };

    constructor() {
        super();
    }

    /**
     * Function to trigger onClick callback function registered
     * by app components
     */
    handleClick = (event) => {
        const { name } = this.props
        this.props.onClick(name, event.target.checked);
    }

    /**
     * Function to trigger onChange callback function registered
     * by app components
     */
    handleChange =  (event) => {
          const { name } = this.props
        this.props.onChange(name, event.target.checked);
    }


  /**
   * Renders the basic outer skeleton required to render the radio button
   * @return {ReactComponent}
   */
    render() {
        const {
            id,
            type,
            name,
            value,
            checked,
            isDisabled,
            label,
        } = this.props;

        const opts = {};

        // Entire ReactDOM
        return (
            <div className='radioGrp'>
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        value={value}
                        checked={checked}
                        disabled={isDisabled}
                        onClick={this.handleClick}
                        onChange={this.handleChange}
                    />
                <label
                    htmlFor={id}
                    {...opts}
                >
                    {label}
                </label>
            </div>
        );
    }
}
export default RadioButton;
