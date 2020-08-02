import React from 'react';
import './index.scss';
import avatar from '@image/avatar.png';
interface iProps {
    num:number,
    imgUrl:string,
    friendName:string,
    time:string,
    info:string
}
function ChatList(props:any) {
    console.log(props);
    return (
        <div className="chatList flex">
           <div className="left">
               <div className="tip flex-center">
                   1
               </div>
               <img src={avatar} alt="" />
           </div>
           <div className="center overflowH flex1 pl-30">
               <div className="top flex">
                   <div className="name flex1">马化腾</div>
                   <div className="time">11：42</div>
               </div>
               <div className="info ellipsis">
               color: $text-color-disable;f我是谁是个打个电话
               </div>
           </div>
        </div>
    );
}

export default ChatList;