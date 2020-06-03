import React from 'react';
import './Message.css';


const Messsage =({message:{user, text}, msName})=>{
    const trimmedName=msName.trim().toLowerCase();
    let isSentByCurrentUser=false;
    if(user===trimmedName){
        isSentByCurrentUser=true;
    }
    return(
        isSentByCurrentUser?
        (<div className="messageContainer" id="justifiedEnd">
            <p className="sentText">{trimmedName}</p>
            <div className="messageBox" id="backgroundBlue">{text}</div>
        </div>):
        (<div className="messageContainer" id="justifiedStart">
        <div className="messageBox">{text}</div>
            <p className="sentText">{user}</p>
            
        </div>)
    )
}
export default Messsage;