import Header from '@/layout/header';
import LeftNav from '@/layout/left-nav';
import Index from "@/pages/home";
// import Category from "../category/category";
// import Product from "../product/product";
// import Role from "../role/role";
// import User from "../user/user";
import { Layout } from 'antd';
import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const { Footer, Sider, Content } = Layout;

class Admin extends Component<any, any> {
  render() {
    return (
      <Layout style={{ height: '100%'  }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header name={''} />
          <Content style={{ background: '#fff', margin: '10px', padding: '10px' }}>
            <Routes>
              <Route path="/index" element={<Index/>} />
              {/* <Route path="/user" component={User} />
              <Route path="/role" component={Role} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} /> */}
              <Route path="/" element={<Navigate to="/" replace />} ></Route>
            </Routes>
          </Content>
          <Footer style={{ background: '#ccc' }}>舒服</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;