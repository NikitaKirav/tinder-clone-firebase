import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sara"
                message="Hey!"
                timestamp="35 minutes ago"
                profilePic="https://pbs.twimg.com/media/DYJSIU-W0AAsNqJ.jpg:large" />
            <Chat
                name="Liza"
                message="Hey!"
                timestamp="14 minutes ago"
                profilePic="https://inc-news.ru/data/inc/upload/2020-07/11/image-8282-1594416082.jpg" />
            <Chat
                name="Regina"
                message="Hey!"
                timestamp="3 minutes ago"
                profilePic="https://avatars.mds.yandex.net/get-zen_doc/1872852/pub_5e30ab488b16e54eabd3bb99_5e30ae6d10e48f03b9e295e4/scale_1200" />
            <Chat
                name="Marta"
                message="Hey!"
                timestamp="17 minutes ago"
                profilePic="https://img.tsn.ua/cached/1578214051/tsn-87394d020f46df1bdfb04b5785c6f4e0/thumbs/x/dd/09/7ecd2b4af69c2e486939951837f209dd.jpeg" />
            <Chat
                name="Cameran"
                message="Hey!"
                timestamp="35 minutes ago"
                 />
        </div>
    );
}

export default Chats;