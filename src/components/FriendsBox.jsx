
import Friend from "./Friend"
import styles from './FriendsBox.module.css'
function FriendsBox({friends ,selectedID,setSelectedID}) {
    return (
            <ul className={styles.friendBox}>
                {friends.map(friend=><Friend friend={friend}
                 selectedID={selectedID} 
                 setSelectedID={setSelectedID}
                 key={friend.id} />)}
            </ul>
    )
}

export default FriendsBox
