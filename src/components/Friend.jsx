import styles from './Friend.module.css'
import {useState} from "react";
function Friend({friend,selectedID,setSelectedID}) {
    return (
        <li className={`${styles.friendItem} ${selectedID === friend.id ? styles.selected:''}`} onClick={()=>setSelectedID(friend.id)}>
            <img src={friend.imgUrl} alt='img' className={styles.friendImage}/>
            <span className={styles.friendName}>{friend.name}</span>
        </li>
    )
}

export default Friend
