import styles from './Icon.module.css'
function Icon({imgsrc,alt}) {
    return (
        <div>
            <img src={imgsrc} alt={alt}className={styles.navIcon} />
        </div>
    )
}

export default Icon
