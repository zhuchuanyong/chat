import React from "react";
import HeaderCom from "@components/Header";
import ChatList from "./components/chatList";
import avatar from "@image/avatar.png";
import logo from "@image/home/logo@2x.png";
import add from "@image/home/add@2x.png";
import search from "@image/home/search@2x.png";
import "./index.scss";
function Home() {
  let arr = Array(20).fill(2);

  return (
    <div className="home h-min content ">
      <HeaderCom
       onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <img key="0" onClick={() => console.log('img')}className="mr18" src={search} alt="" />,
          <img key="1" src={add} alt="" />,
        ]}
        leftContent={<img src={avatar} alt="" />}
        className="fixed"
      >
        <img src={logo} alt="" />
      </HeaderCom>
      <div className="ht-88"></div>
      <div className="spacing-lf">
        <ChatList num={1} friendName="好友请求"></ChatList>
        {arr.map(() => {
          return <ChatList num={2}></ChatList>;
        })}
      </div>
    </div>
  );
}

export default Home;
