import { useEffect, useState } from "react"
import Search from "./Search"
import FriendsBox from "./FriendsBox";
import Loader from "./Loader";
import styles from './FriendsSection.module.css'

function FriendsSection({children ,setFriends}) {
    const [query ,setQuery]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    

    useEffect(function(){
        async function FetchFriends()
        {
            setIsLoading(true);
            const res = await fetch('http://localhost:8080/friends')
            const data=await res.json();
            
            setFriends(data.filter(user=>user.name.toLowerCase().includes(query)));
            setIsLoading(false);
        }

        FetchFriends();
    },[query,setFriends])

    
    return (
        <div className={styles.contentContainer}>
            <Search query={query} setQuery={setQuery}/>
            {!isLoading && children}
            {isLoading && <Loader style={styles.spinner}/>}
        </div>
    )
}

export default FriendsSection
