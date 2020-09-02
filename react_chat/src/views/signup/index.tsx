import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import "./index.scss";
import logo from "@image/home/logo@2x.png";
function Signup() {
  const history=useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameChange = (e: any) => {
    setUsername(e.target.value);
    console.log("username", username);
  };
  const passwordChange = (e: any) => {
    setPassword(e.target.value);
    console.log("password", password);
  };

  const login=()=>{
    console.log('lll')
    axios.get('http://192.168.31.175:3003').then(res=>{
      console.log(res)
    })
    axios.get('http://192.168.31.175:3003/test').then(res=>{
      console.log(res)
    })
    history.push('/login')
  }
  const back=()=>{
    history.goBack()
  }
  return (
    <div className="login h-min">
      <div className="top-bar justify-between w-screen flex">
      <div onClick={back} className="top-bar-left flex-center ">
                返回
            </div>

      </div>
      <div className="logo w-screen flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="main">
        <div className="title">登录</div>
        <div className="inputs">
          <input
            type="text"
            value={username}
            onChange={usernameChange}
            placeholder="用户名/邮箱"
          />
          <input
            type="text"
            value={password}
            onChange={passwordChange}
            placeholder="密码"
          />
        </div>
      </div>
      <div className="ht-120"></div>
      <div className="flex justify-center ">
      <div className="submit flex items-center justify-center" onClick={login}>注册</div>
      </div>
    </div>
  );
}

export default Signup;
