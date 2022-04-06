import styles from './Navbar.module.css'
import { CgCheckO, CgChevronDown } from 'react-icons/cg'
import { useState } from 'react'
const Mail = () => {
    const [active, setActive] = useState('Focus');
    
    return (
        <div className={styles.mail}>
            <div className={styles.mail__nav}>
                <CgCheckO className={styles.mail__nav__icon}/>
                <div className={active === 'Focus' ? styles.mail__nav__focus__active : styles.mail__nav__focus} onClick={()=>setActive('Focus')}>
                    Focused
                </div>
                <div className={active === 'Other' ? styles.mail__nav__focus__active : styles.mail__nav__focus} onClick={()=>setActive('Other')}>
                    Other
                </div>
                <div className={styles.mail__nav__filter}>
                    Filter <CgChevronDown/>
                </div>
            </div>
            <div className={styles.mail__nav}>
                <div className={styles.mail__nav__user}>

                </div>
            </div>
        </div>
    )
}
export default Mail;