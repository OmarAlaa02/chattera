import { useEffect, useState } from 'react'
import styles from './MessageSection.module.css'
import ProfileBar from './ProfileBar'
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import Loader from './Loader';



function MessageSection({selectedID}) {
    const [friend,setFriend]=useState({});
    const [isLoading,setIsLoading]=useState(false);
    useEffect(function(){
        if(selectedID === null)
            return;
        async function FetchUser()
        {
            setIsLoading(true);
            const res = await fetch('http://localhost:8080/friends')
            const data=await res.json();
            setFriend(data.filter(user=>user.id===selectedID)[0]);
            setIsLoading(false);
        }
        FetchUser();
    },[selectedID])
    

    return (
        <div className={styles.container}>
            {isLoading && <Loader style={styles.spinner}/>}
            {selectedID === null && !isLoading && <span className={styles.text}>Choose a friend to chat</span>}
            {selectedID !== null && !isLoading &&  <>
                <ProfileBar friend={friend}/>
                <MessageBox selectedID={selectedID}/>
                <MessageInput />
            </>}
        </div>
    )
}

export default MessageSection
