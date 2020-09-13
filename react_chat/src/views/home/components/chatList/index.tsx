import React from "react";
import "./index.scss";
import avatar from "@src/image/avatar.png";
// import {chatListProps } from '@src/types';
// chatListProps
export interface IProps {
  num: number;
  imgUrl?: string;
  friendName?: string;
  time?: string;
  info?: string;
}

// 设置props 默认值
ChatList.defaultProps = {
  imgUrl: avatar,
  friendName: "马化腾",
  time: "11：42",
  info:'天苍苍,野茫茫'
};
function ChatList(props: IProps) {
  console.log(props);
  return (
    <div className="chatList flex">
      <div className="left">
        <div className="tip flex-center">{props.num}</div>
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="center overflowH flex1 pl30">
        <div className="top flex">
          <div className="name flex1">{props.friendName}</div>
          <div className="time">{props.time}</div>
        </div>
        <div className="info ellipsis">
            {props.info}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
