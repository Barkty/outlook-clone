import styles from './Greet.module.css';

const Greet = () => {

    return (
        <div className={styles.greet}>
            <div className={styles.greet__background}></div>
            <div className={styles.greet__con}>
                <div className={styles.greet__con__primary}>
                    
                </div>
                <div className={styles.greet__con__second}>

                </div>
            </div>
        </div>
    )
}

export default Greet;