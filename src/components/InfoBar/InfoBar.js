import React from 'react';
import './InfoBar.css';
import onlineIcon from '../../images/onlineIcon.png';
import closeIcon from '../../images/closeIcon.png';

const InfoBar=({room})=>{
    return(
    <div className="InfoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online iamge"/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            {/*jump to join page */}
            <a href="/"><img src={closeIcon} alt="close iamge"/></a>
        </div>
    </div>)
}
export default InfoBar;