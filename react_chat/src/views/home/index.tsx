import React from 'react';

import HeaderCom from './components/Header';
import ChatList from './components/chatList';
import './index.scss';
function Home() {
    return (
        <div className="home h-min content ">
            <HeaderCom></HeaderCom>
            <div className="spacing-lf">
                <ChatList a="ddd"></ChatList>
            </div>
        </div>
    );
}

export default Home;
