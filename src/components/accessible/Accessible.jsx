import styles from './Accessible.module.css';
import { BsPatchCheck } from 'react-icons/bs';

const Accessible = () => {

    return (
        <div className={styles.accessible}>
            <div className={styles.accessible__speaker}></div>
            <div className={styles.accessible__text}>
                <h1 className={styles.accessible__text__headline}>More accessible than ever</h1>
                <p>We've designed Outlook.com to be everyone's most accessible ibox, with intuitive voice-controlled navigation, support for multiple assistive devices--and more.</p>
            </div>
            <div className={styles.accessible__hotmail}>
                <div className={styles.accessible__hotmail__check}>
                    <BsPatchCheck className={styles.accessible__hotmail__check__icon}/>
                </div>
                <div className={styles.accessible__hotmail__text}>
                    <h3>Looking for Hotmail?</h3>
                    <p>You've found it! We've redesigned Hotmail as Outlook. We're still committed to building the best free email and calender.</p>
                </div>
            </div>
        </div>
    )
}

export default Accessible;