import React from 'react';
import logo from '@image/home/logo@2x.png';
import add from '@image/home/add@2x.png';
import search from '@image/home/search@2x.png';
import avatar from '@image/avatar.png';
import './index.scss';
function HeaderCom(props:any) {
  // props.className
    return (
        <div  className={'top-bar flex-center-wrap w-screen '+ props.className}>
            <div className="top-bar-left flex-center ">
                <img src={avatar} alt="" />
            </div>
            <div className="top-bar-center flex-center flex1">
                <img src={logo} alt="" />
            </div>
            <div className="top-bar-right flex-center">
                <img className="mr-18" src={search} alt="" />
                <img src={add} alt="" />
            </div>
        </div>
    );
}

export default HeaderCom;
