import menuList from "@/router/menu";
import { formateDate } from '@/utils/dateUtils';
import { Button, message, Modal } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';
type StateType = {
  currentTime: any;
  auth: any;
  intervalId:any
};
type propType = {
  name: string;
  [propName: string]: any;
};
interface Header {
  state: StateType;
  props: propType
}

class Header extends Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTime: formateDate(Date.now()),
      auth: localStorage.getItem('auth'),
      intervalId:""
    }
  }


  logout = () => {
    Modal.confirm({
      title: '确认退出?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success('退出成功！')
        localStorage.clear()
        this.props.history.replace('/login')
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }

  getTitle = () => {
    let title = ''
    const path = this.props.location.pathname
    menuList.forEach((item:any) => {
      if (item.path === path) {
        title = item.title
      } else if (item.chlidren) {
        const cItem = item.chlidren.find((cItem:any) => cItem.path === path)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }


  //定时器
  componentDidMount() {
    this.state.intervalId = setInterval(() => {
      this.setState({
        currentTime: formateDate(Date.now())
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const title = this.getTitle()
    const { currentTime } = this.state
    return (
      <div className="header">
        <div className="header-top">
          欢迎，admin
          <Button type="text" style={{ color: '#ff7875' }} onClick={this.logout}>退出</Button>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src="http://api.map.baidu.com/images/weather/day/duoyun.png" alt="weather" />
            <span>晴</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);