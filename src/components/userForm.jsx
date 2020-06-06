import React, { Component } from "react";
import { Input } from "antd";

class UserForm extends Component {
  render() {
    const { data, onChange } = this.props;
    const { name, email } = data;
    return (
      <React.Fragment>
        Name
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <span className={"red"}>*</span>Email
        <Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </React.Fragment>
    );
  }
}

export default UserForm;
