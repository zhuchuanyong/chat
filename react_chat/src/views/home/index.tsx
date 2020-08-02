import React from 'react';

import logo from '@image/home/logo@2x.png';
import add from '@image/home/add@2x.png';
import search from '@image/home/search@2x.png';
import avatar from '../../image/avatar.png';
import './index.scss';
function Home() {
  return (
    <div className="home content flex_center ">
     <div className="top-bar">
       <div className="top-bar-left">
         <img src={avatar} alt="" />
       </div>
       <div className="top-bar-center">
       <img src={logo} alt="" />
       </div>
       <div className="top-bar-right">
       <img src={add} alt="" />
       <img src={search} alt="" />
       </div>
     </div>
    </div>
  );
}

export default Home;