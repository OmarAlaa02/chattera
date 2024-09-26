import styles from './Search.module.css'
function Search({query,setQuery}) {
    return (
        <input type="text"
         placeholder="friend..."
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        className={styles.searchBar}/>
    )
}

export default Search
