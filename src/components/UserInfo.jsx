import React from 'react';import "../styles/UserInfo.css";

export default function UserInfo({user, setSelectedItemId, showUserMessage}) {
    return (
        <>
            <div className="content">
                <img className='background_userInfo' src={user.img || ''} alt={user.id} />
                <button data-toggle="modal" data-target="#userInfoModal"
                onClick={() => {
                    showUserMessage()
                    setSelectedItemId(user.id)
                }} className="location"

                    type="button"
                >{user.name}</button>
            </div>
        </>
    );
}


