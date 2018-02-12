import React from "react";
import FormBuilder from "./FormBuilder";
import Header from "./Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
		<FormBuilder />
      </div>
    );
  }
}
