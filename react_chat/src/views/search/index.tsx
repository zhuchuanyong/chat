import React from "react";
import HeaderCom from "@components/Header";
import avatar from "@image/avatar.png";
import "./index.scss";
function Search() {
  function searchFn() {
    console.log("234");
  }
  return (
    <div>
      <HeaderCom rightContent="取消">
        <div className="flex flex-1 pd10 pl0-i" style={{ height: "100%" }}>
          <input
            style={{ background: "rgba(243,244,246,1" }}
            className="flex flex-1 pl10 pr10"
            onInput={searchFn}
            placeholder="搜索用户"
            type="search"
          ></input>
        </div>
      </HeaderCom>
      <div className="main">
        <div className="search-user result">
          <div className="title">用户</div>
          <div className="list flex content-center items-center ">
            <img src={avatar} alt="" />
            <div className="names flex-1">
              <div className="name">马化腾</div>
              <div className="email">2435@qq.com</div>
            </div>
            <div className="right-bt send">发送</div>
          </div>
          <div className="list flex content-center items-center ">
            <img src={avatar} alt="" />
            <div className="names flex-1">
              <div className="name">马化腾</div>
              <div className="email">2435@qq.com</div>
            </div>
            <div className="right-bt add">加好友</div>
          </div>
          <div className="list flex content-center items-center ">
            <img src={avatar} alt="" />
            <div className="names flex-1">
              <div className="name">马化腾</div>
              <div className="email">2435@qq.com</div>
            </div>
            <div className="right-bt send">发消息</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
