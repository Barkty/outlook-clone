import styles from './Navbar.module.css'
import { CgCheckO, CgChevronDown } from 'react-icons/cg'
import { useState } from 'react'
const Mail = () => {
    const [active, setActive] = useState('Focus');
    
    return (
        <div className={styles.mail}>
            <div className={styles.mail__nav}>
                <CgCheckO className={styles.mail__nav__icon}/>
                <div className={active === 'Focus' ? styles.mail__nav__active : styles.mail__nav__focus} onClick={()=>setActive('Focus')}>
                    Focused
                </div>
                <div className={active === 'Other' ? styles.mail__nav__active : styles.mail__nav__focus} onClick={()=>setActive('Other')}>
                    Other
                </div>
                <div className={styles.mail__nav__filter}>
                    Filter <CgChevronDown/>
                </div>
            </div>
            <div className={styles.mail__user}>
                <div className={styles.mail__user__icon}></div>
                <div className={styles.mail__user__mess}>
                    <p>Microsoft Account Team</p>
                    <p>New apps connected to your....</p>
                    <p>Microsoft account New app(s) connected to your ....</p>
                </div>
                <div className={styles.mail__user__time}>
                    <p>Tue 3/29</p>
                </div>
            </div>
            <div className={styles.mail__user}>
                <div className={styles.mail__user__icon}></div>
                <div className={styles.mail__user__mess}>
                    <p>Microsoft Account Team</p>
                    <p>New apps connected to your....</p>
                    <p>Microsoft account New app(s) connected to your ....</p>
                </div>
                <div className={styles.mail__user__time}>
                    <p>Wed 4/29</p>
                </div>
            </div>
        </div>
    )
}
export default Mail;