//useEffect is for life cycle method inside of hook
//useEffect is equivalent of componentDidMount
import React from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Output from '../Output/Output';
let socketChat;
const ENDPOINT ='https://react-chat-server-application.herokuapp.com/';
class Chat extends React.Component{
    state={chatName:"", chatRoom:"", chatMessages:[],chatMessage:""};
    
    componentDidMount(){
        
        const {name, room}=queryString.parse(this.props.location.search);
        socketChat=io(ENDPOINT);
        this.setState({chatName:name, chatRoom:room});
        
        socketChat.emit('join',{serverName:name, serverRoom:room}, ()=>{});
        
        //wasted a good few hours to resolve this issue
        //turn out socket.on doesn't work in componentDidMount(). The component get called recursively
        //guess componentDidMount only update once on re-render
        socketChat.on('message', (propsMessage)=>{
            this.setState((prevState)=>{return{...prevState,
                chatMessages:prevState.chatMessages.concat(propsMessage)}})
        })
    }
    componentDidUpdate(){
        //high chance have to put things here as well since hook useEffect means it cover for this method
        //but now hook useEffect is gone, have to self track all the changes
        
    }
    
    render(){
        const sendMessage=(event)=>{
            //react could refresh browser and stuff, to prevent that, preventDefault()
            event.preventDefault();
            console.log(this.state.chatMessage);
            if(this.state.chatMessage){
                //emit the single message to server and delete the message to wait for next input
                socketChat.emit('sendMessage', this.state.chatMessage)
                this.setState({chatMessage:""})
                console.log("send message "+this.state.chatMessage);
            }
        }
        const setMessage=(props)=>{
            this.setState({chatMessage:props});
            console.log("set message "+this.state.chatMessage);
        }
        //console.log(this.state.chatMessage, this.state.chatMessages);
        return(
            <div className="chatBody">
                <div className="wholeChat">
                    <InfoBar room={this.state.chatRoom}/>
                    <Output outputMessages={this.state.chatMessages} outputName={this.state.chatName}/>
                    <Input setMessageInput={setMessage} 
                    sendMessageInput={sendMessage} 
                    chatMessageInput={this.state.chatMessage} />
                    
                    
                    
                    {/*<input value={this.state.chatMessage} 
                    onChange={(event)=>setMessage(event.target.value)} 
        onKeyPress={event=>event.key==='Enter'?sendMessage(event):null}/>*/}
                </div>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("herre");
        socketChat.emit('disconnect');
        socketChat.off();
    }
}
/*const Chat =props=>{
    const [chatName, setChatName]=useState('');
    const [chatRoom, setChatRoom]=useState('');
    const ENDPOINT ='localhost:5000';
    useEffect(()=>{
        const {chatName, chatRoom}=queryString.parse(this.props.location.search);
        socket=io();
        console.log(chatName, chatRoom);
        setChatName(chatName);
        setChatRoom(chatRoom);
        socket.emit('join',{serverName:chatName, serverRoon:chatRoom})
    }, [ENDPOINT, window.location.search])
    return(
        <h1>Chat</h1>
    )
}*/
export default Chat;