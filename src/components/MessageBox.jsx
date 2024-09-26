import { useEffect, useRef, useState } from "react"
import Message from "./Message"
import styles from './MessageBox.module.css'
function MessageBox({selectedID }) {
    const [messages,setMessages]=useState([]);
    const messageBoxEl=useRef(null);
    useEffect(function(){
        async function FetchMessages(){
            const res=await fetch('http://localhost:8080/messages');
            const data=await res.json();

            // console.log(data);
            setMessages(data);
            console.log(messageBoxEl);
            messageBoxEl.current.scrollTop=messageBoxEl.current.clientHeight;
        }
        FetchMessages();
    },[setMessages,selectedID]);

    return (
        <div className={styles.messageSpace} ref={messageBoxEl}>
            {
                messages.map((message,index)=><Message selectedID={selectedID}
                      message={message}
                      key={index}/>)
            }
        </div>
    )
}

export default MessageBox
