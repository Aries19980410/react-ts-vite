import Header from '@/layout/header';
import LeftNav from '@/layout/left-nav';
import Index from "@/pages/home";
// import Category from "../category/category";
// import Product from "../product/product";
// import Role from "../role/role";
// import User from "../user/user";
import { Layout } from 'antd';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const { Footer, Sider, Content } = Layout;

class Admin extends Component<any, any> {
  render() {
    return (
      <Layout style={{ height: '100%'  }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header />
          <Content style={{ background: '#fff', margin: '10px', padding: '10px' }}>
            <Switch>
              <Route path="/index" component={Index} />
              {/* <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} /> */}
              <Redirect to="/index"></Redirect>
            </Switch>
          </Content>
          <Footer style={{ background: '#ccc' }}>舒服</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;