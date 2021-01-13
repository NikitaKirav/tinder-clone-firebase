import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://avatars.mds.yandex.net/get-zen_doc/1872852/pub_5e30ab488b16e54eabd3bb99_5e30ae6d10e48f03b9e295e4/scale_1200",
            message: "What's up"
        },
        {
            name: "Ellen",
            image: "https://avatars.mds.yandex.net/get-zen_doc/1872852/pub_5e30ab488b16e54eabd3bb99_5e30ae6d10e48f03b9e295e4/scale_1200",
            message: "How it going"
        },
        {
            message: "How it going"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div> 
                ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div> 
                )
            )
            )}
            <form className="chatScreen_input">
                <input type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen_inputField"
                    placeholder="Type a mesage..."
                />
                <button type="submit" onClick={handleSend} className="chatScreen_inputButton">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;