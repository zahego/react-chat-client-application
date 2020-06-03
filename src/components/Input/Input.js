import React from 'react';
import './Input.css';
const Input=({setMessageInput, sendMessageInput, chatMessageInput })=>(
<div className="input-div">
<input value={chatMessageInput} 
                    onChange={(event)=>setMessageInput(event.target.value)} 
                    //hit enter to submit
                    onKeyPress={event=>event.key==='Enter'?sendMessageInput(event):null}/>
<button className="sendButton" onClick={(event)=>sendMessageInput(event)}>Send</button>
</div>
)
export default Input;