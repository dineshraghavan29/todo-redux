import React, { Component } from "react";
import { Modal, Button } from "antd";
import UserForm from "../userForm";
import TodoForm from "../todoForm";

class GenericModal extends Component {
  state = {
    loading: false,
  };

  constructor() {
    super();
    this.handleOk = this.handleOk.bind(this);
  }

  async handleOk() {
    //Temporary validation
    if (this.props.data.dateAdded === "") {
      alert("Please enter date");
      return;
    }
    if (this.props.data.email === "") {
      alert("Please enter email");
      return;
    }
    this.setState({ loading: true });
    async function wait(duration = 1000) {
      await new Promise((resolve) => setTimeout(resolve, duration));
    }
    await wait(2000);
    this.setState({ loading: false });
    this.props.onOk();
  }

  getModalTitle(module, data) {
    const title = data.key === "" ? "New " : "Edit ";
    return title + module;
  }

  render() {
    const { module, data } = this.props;
    const title = this.getModalTitle(module, data);
    return (
      <Modal
        title={title}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.onCancel}
        footer={[
          <Button key="back" onClick={this.props.onCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.state.loading}
            onClick={this.handleOk}
          >
            {title.toLowerCase().indexOf("new") >= 0 ? "Save" : "Update"}
          </Button>,
        ]}
      >
        {title.toLowerCase().indexOf("user") >= 0 && (
          <UserForm data={this.props.data} onChange={this.props.onChange} />
        )}
        {title.toLowerCase().indexOf("todo") >= 0 && (
          <TodoForm {...this.props} />
        )}
      </Modal>
    );
  }
}

export default GenericModal;
