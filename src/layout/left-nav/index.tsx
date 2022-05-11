// import logo from '@/assets/images/login.png'
import menuList from '@/router/menu';
import Icon from '@ant-design/icons';
import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

type StateType = {
  openKey:any
};
type propType = {
  name: string;
  [propName: string]: any;
};
interface Header {
  state: StateType;
  props: propType
}

const { SubMenu } = Menu;
/**
 * 左侧导航
 */
class LeftNav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      openKey: ""
    }
  }
  /**
   * 根据指定的menu数据去生成路由
   * @param {*} menuList 
   */
  getMenuNodes = (menuList: any) => {
    return menuList.map((item: any) => {
      if (!item.chlidren) {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon}></Icon>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      return (
        <SubMenu key={item.path} title={
          <span>
            <Icon type={item.icon}></Icon>
            <span>{item.title}</span>
          </span>
        }
        >
          {
            this.getMenuNodes(item.chlidren)
          }
        </SubMenu>
      )
    })
  }

  /**
   * 根据指定的menu数据去生成路由  reduce方法
   * @param {*} menuList 
   */


  getMenuNodes2 = (menuList: any) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre: any, item: any) => {
      if (!item.chlidren) {
        pre.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        const cItem = item.chlidren.find((cItem: any) => cItem.path === path)
        if (cItem) {
          this.setState({
            openKey : item.path
          })
          
        }
        pre.push(
          <SubMenu key={item.path} title={
            <span>
              {item.icon}
              <span>{item.title}</span>
            </span>
          }
          >
            {
              this.getMenuNodes2(item.chlidren)
            }
          </SubMenu>
        )
      }
      return pre
    }, [])
  }

  render() {
    //获取当前路径
    const menuNodes = this.getMenuNodes2(menuList)
    const selectPath = this.props.location.pathname
    return (
      <div className="left-nav">
        <Link className="left-nav-link" to="">
          {/* <img src={logo} alt="" /> */}
          <h1>Vite-react</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[selectPath]}
          defaultOpenKeys={[this.state.openKey]}
        >
          {
            menuNodes
          }
        </Menu>
      </div>
    );
  }
}


/*
 向外暴露使用高阶withRouter()包装非路由组件 ，
 新组件像leftNav传递三个参数：location、histroy 
*/
export default LeftNav;