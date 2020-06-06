import React, { Component } from "react";
import { Input, DatePicker } from "antd";
import moment from "moment";

class TodoForm extends Component {
  render() {
    const { data, onChange, onDateChange } = this.props;
    const { action, dateAdded } = data;
    const dateFormat = "DD-MM-YYYY";
    return (
      <React.Fragment>
        Action
        <Input
          placeholder="Action"
          name="action"
          value={action}
          onChange={onChange}
        />
        <span className={"red"}>*</span> Date
        <br />
        <DatePicker
          placeholder="Date"
          name="dateAdded"
          value={dateAdded ? moment(dateAdded, "DD-MM-YYYY") : ""}
          onChange={onDateChange}
          format={dateFormat}
        />
      </React.Fragment>
    );
  }
}

export default TodoForm;
