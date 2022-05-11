import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './login.less';
interface Props{
  history:any
}
const Login:React.FC<Props> = (props) => {
  const [codeImg] = useState();
  const history = useNavigate();
  //初始化
  useEffect(() => {
    
  }, []);
  // 登录
  const onFinish = (form: any) => {
    console.log(props)
    props.history.push('/')
  };
  //登录失败
  const fail = () => {
    message.error('登录失败，请检查表单');
  };
  //获取验证码
  const getCode = () => {

  }

  return (
    <div className="login">
      <div className="login-header">

      </div>
      <div className="login-content">
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={fail}
        >
          <div className='title'>
            后台管理系统
          </div>
          <Form.Item
            label="账号"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* <div className="code">
            <Form.Item
              style={{ margin: 0 }}
              label="验证码"
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <img src={codeImg} alt="" onClick={() => getCode()} />
          </div> */}

          <div className='btnBox'>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );

}

export default Login;