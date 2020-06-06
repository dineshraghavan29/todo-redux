import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Table, Space, Row, Col } from "antd";
import GenericModal from "./common/genericModal";
import { addTodo, updateTodo, deleteTodo } from "../redux/actions";

class Todos extends Component {
  state = {
    visible: false,
    data: {
      action: "",
      dateAdded: "",
      key: "",
    },
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Date Added",
      dataIndex: "dateAdded",
      key: "dateAdded",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
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

  handleDateChange = (date, dateString) => {
    const data = { ...this.state.data };
    data["dateAdded"] = dateString;
    this.setState({ data });
  };

  handleCreate() {
    this.setState({ visible: true });
  }

  handleEdit(data) {
    this.setState({ visible: true, data });
  }

  handleDelete(data) {
    this.props.deleteTodo(data.key);
  }

  handleOk() {
    this.state.data.key === ""
      ? this.props.addTodo(this.state.data)
      : this.props.updateTodo(this.state.data);
    this.setState({
      visible: false,
      data: {
        action: "",
        dateAdded: "",
        key: "",
      },
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
      data: { action: "", dateAdded: "", key: "" },
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span="2">
            <Button className="m-b15" onClick={this.handleCreate}>
              Add Todo
            </Button>
          </Col>
          <Col span="22"></Col>
        </Row>

        <Table dataSource={this.props.todos} columns={this.columns} />
        <GenericModal
          visible={this.state.visible}
          data={this.state.data}
          onChange={this.handleChange}
          onDateChange={this.handleDateChange}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          module={this.props.module}
        ></GenericModal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos, module, data } = state.todos;
  return { todos, module, data };
};

// const mapDispatchToProps = (dispatch) => ({
//   addTodo: () => dispatch(addTodo()),
//   updateTodo: () => dispatch(updateTodo()),
//   deleteTodo: () => dispatch(deleteTodo()),
// });

export default connect(mapStateToProps, { addTodo, updateTodo, deleteTodo })(
  Todos
);
// export default Todos;
