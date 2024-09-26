import styles from './Message.module.css'
function Messsage({selectedID,message}) {
    const isRecieved=Number(selectedID) === message.senderID;
    return (
        <div className={`${styles.msgContainer} ${!isRecieved ? styles.msgSent :''}`}>
            {message.content}
        </div>
    )
}

export default Messsage
