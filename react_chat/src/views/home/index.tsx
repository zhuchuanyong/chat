import React from "react";

import HeaderCom from "./components/Header";
import ChatList from "./components/chatList";
import "./index.scss";
function Home() {
  let arr=Array(20).fill(2)


  return (
    <div className="home h-min content ">
      <HeaderCom></HeaderCom>
      <div className="spacing-lf">
        <ChatList num={1} friendName="好友请求"></ChatList>
       {
         arr.map(()=>{
        return   <ChatList num={2}></ChatList>
         })
       }

      </div>
    </div>
  );
}

export default Home;
