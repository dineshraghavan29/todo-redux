import React, { Component } from "react";
import { Layout, Menu, Row, Col } from "antd";
import Tab from "./tab";
import { FormOutlined } from "@ant-design/icons";
import "../App.css";

class MainContainer extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    const innerheight = window.innerHeight;
    return (
      <React.Fragment>
        <Layout className="layout">
          <Header>
            <Menu theme="light" mode="horizontal"></Menu>
            <h1 className="white">
              Todo <FormOutlined />
            </h1>
          </Header>
          <Content style={{ padding: "0 50px", height: innerheight }}>
            <Row>
              <Col span={2}></Col>
              <Col span={20}>
                <Tab></Tab>
              </Col>
              <Col span={2}></Col>
            </Row>
          </Content>
          <Footer></Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default MainContainer;
