import styles from './Greet.module.css';

const Greet = () => {

    return (
        <div className={styles.greet}>
            <div className={styles.greet__background}></div>
            <div className={styles.greet__con}>
                <div className={styles.greet__con__primary}>
                    <h1>Welcome to Outlook</h1>
                    <p>Email and calender,<br/> plus so much more</p>
                    <button type='button'>Create free account</button>
                </div>
                <div className={styles.greet__con__second}>
                    <i className={styles.greet__con__second__word}></i>
                    <i className={styles.greet__con__second__onedrive}></i>
                    <i className={styles.greet__con__second__onenote}></i>
                    <i className={styles.greet__con__second__outlook}></i>
                    <i className={styles.greet__con__second__excel}></i>
                    <i className={styles.greet__con__second__skype}></i>
                    <i className={styles.greet__con__second__ppt}></i>
                </div>
            </div>
            <div className={styles.greet__bottom}>
                <div className={styles.greet__bottom__background}></div>
                <div className={styles.greet__bottom__textcon}>
                    
                </div>
            </div>
        </div>
    )
}

export default Greet;