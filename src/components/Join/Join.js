import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
import pepe from '../../images/pepe.png';

const Join =()=>{
    //hook allow using state and lifecycle method inside functional programming
    const [poggerName, setPoggerName]=useState('');
    const [poggerRoom, setPoggerRoom]=useState('');

    return(
        <div className="joinOuterContainer">
            <div className="innerContainer">
                <div className="header">
                <img src={pepe} alt="pepe" />
                    <h1>Pogger Paradise</h1>
                    <img src={pepe} alt="pepe" />
                </div>
                <h3>Join</h3>
                {/*event can be event or e, or anything */}
                <div><input placeholder="PoggerName" className="joinInput" type="text" onChange={(eventOfName)=>setPoggerName(eventOfName.target.value)}/></div>
                <div><input placeholder="PoggerRoom" className="joinInput mt-20" type="text" onChange={(eventOfRoom)=>setPoggerRoom(eventOfRoom.target.value)}/></div>
                {/*on even when no name or room supplied, prevent the link from being clicked like normal(preventDefault), otherwise, do nothing(null) */}
                <Link onClick={onBrokenEvent=>(!poggerName||!poggerRoom)?onBrokenEvent.preventDefault():null} to={`/chat?name=${poggerName}&room=${poggerRoom}`}>
                <button className="buttonsub" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;