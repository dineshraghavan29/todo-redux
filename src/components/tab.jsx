import React, { Component } from "react";
import { Tabs } from "antd";
import Users from "./users";
import Todos from "./todos";

const { TabPane } = Tabs;
class Tab extends Component {
  state = {};
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Todos" key="1">
          <Todos />
        </TabPane>
        <TabPane tab="Users" key="2">
          <Users />
        </TabPane>
      </Tabs>
    );
  }
}

export default Tab;
