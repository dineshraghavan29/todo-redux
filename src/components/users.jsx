import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Space, Row, Col } from "antd";
import GenericModal from "./common/genericModal";
import GenericButton from "./common/genericButton";
import { addUser, updateUser, deleteUser } from "./../redux/actions";

class Users extends Component {
  state = {
    visible: false,
    data: {
      name: "",
      email: "",
      key: "",
    },
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => this.handleEdit(record)}>Edit</a> |
          <a onClick={() => this.handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleCreate() {
    this.setState({ visible: true });
  }

  handleEdit(data) {
    this.setState({ visible: true, data });
  }

  handleDelete(data) {
    this.props.deleteUser(data.key);
  }

  handleOk() {
    this.state.data.key === ""
      ? this.props.addUser(this.state.data)
      : this.props.updateUser(this.state.data);
    this.setState({
      visible: false,
      data: {
        name: "",
        email: "",
        key: "",
      },
    });
  }

  handleCancel() {
    this.setState({ visible: false, data: { name: "", email: "", key: "" } });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span="24">
            <GenericButton label="Create User" onClick={this.handleCreate} />
          </Col>
        </Row>
        <Table dataSource={this.props.users} columns={this.columns} />
        <GenericModal
          visible={this.state.visible}
          data={this.state.data}
          onChange={this.handleChange}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          module={this.props.module}
        ></GenericModal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { users, module, data } = state.users;
  return { users, module, data };
};

export default connect(mapStateToProps, { addUser, updateUser, deleteUser })(
  Users
);
// export default Users;
