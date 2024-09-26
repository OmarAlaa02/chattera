import NavBar from "../components/NavBar"
import FriendsSection from "../components/FriendsSection"
import MessageSection from "../components/MessageSection"
import Search from "../components/Search"
import FriendsBox from "../components/FriendsBox"
import styles from './Home.module.css'
import { useState } from "react"

function Home() {
    const [selectedID,setSelectedID]=useState(null);
    const [friends ,setFriends]=useState([]);

    return (
        <div className={styles.container}>
            <NavBar />
            
            <FriendsSection setFriends={setFriends} >
                <FriendsBox friends={friends} 
                selectedID={selectedID}  
                setSelectedID={setSelectedID}/>
            </FriendsSection>

            <MessageSection selectedID={selectedID}/>
        </div>
    )
}

export default Home
