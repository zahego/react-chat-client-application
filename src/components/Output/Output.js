import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Output.css';
import Message from '../Message/Message.js';

const Output =({outputMessages, outputName})=>(
    <ScrollToBottom className="output">
        {outputMessages.map((message, i)=>
        <div key={i}>
            <Message message={message} msName={outputName} />
        </div>)}
    </ScrollToBottom>
)
export default Output;