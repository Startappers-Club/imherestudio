import React from 'react';import "../styles/UserInfo.css";

export default function UserInfo({user, setSelectedItemId, showUserMessage}) {
    return (
        <>
            <div className="content" onClick={() => {
                    showUserMessage()
                    setSelectedItemId(user.id);
                }}
                data-toggle="modal"
                data-target="#userInfoModal"
            >
                        <img className='background_userInfo' src={user.img || ''} alt={user.id} />
                        <span className='user_name'>{ user.name }</span>
            </div>
        </>
    );
}


