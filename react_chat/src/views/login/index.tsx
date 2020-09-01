import React, { useState } from "react";
import "./index.scss";
import logo from "@image/home/logo@2x.png";
function Login() {
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
  return (
    <div className="login h-min">
      <div className="top-bar justify-end w-screen flex">
        <div className="top-bar-right login-header-title flex items-center">
          注册
        </div>
      </div>
      <div className="logo w-screen flex items-center justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="main">
        <div className="title">登录</div>
        <div className="slogan flex items-center">你好,欢迎登陆</div>
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
      <div className="submit flex items-center justify-center">登录</div>
      </div>
    </div>
  );
}

export default Login;
