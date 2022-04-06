import styles from './Navbar.module.css'
import { CgCheckO, CgChevronDown } from 'react-icons/cg'
import { useState } from 'react'
const Mail = () => {
    const [active, setActive] = useState(true);
    
    return (
        <div className={styles.mail}>
            <div className={styles.mail__nav}>
                <CgCheckO className={styles.mail__nav__icon}/>
                <div className={styles.mail__nav__focus}>
                    Focused
                </div>
                <div className={styles.mail__nav__focus}>
                    Other
                </div>
                <div className={styles.mail__nav__filter}>
                    Filter <CgChevronDown/>
                </div>
            </div>
        </div>
    )
}
export default Mail;