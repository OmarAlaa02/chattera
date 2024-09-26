import Friends from "../pages/Friends"
import styles from './ProfileBar.module.css'

function ProfileBar({friend}) {
    return (
        <div className={styles.chatHeader}>
            <img src={friend.imgUrl} alt={`${friend.name}'s picture`}/>
            <p>{friend.name}</p>
        </div>
    )
}

export default ProfileBar
