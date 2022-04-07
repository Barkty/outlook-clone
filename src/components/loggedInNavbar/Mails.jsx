import styles from './Navbar.module.css'
import { CgCheckO, CgChevronDown } from 'react-icons/cg'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

export const Email = () => {

    return (
        <div className={styles.email}>
            <h1>New app(s) connected to your Microsoft account</h1>
            <div className={styles.email__con}>
                <div className={styles.email__con__sub}>
                   <p> <AiOutlineInfoCircle className={styles.email__con__sub__icon}/>
                    Getting too much email? <Link to='/'> Unsubscribe </Link>| <Link to='/'> Manage </Link></p>
                </div>
                <div className={styles.email__con__logo}>
                    <div className={styles.email__con__logo__icon}></div>
                </div>
                <div className={styles.email__con__mail}>
                    <p>Microsoft account team &lt;account-security-noreply&#64;accountprotection.microsoft.com&gt;</p>
                    <p className={styles.email__con__mail__date}>Tue 3/29/2022 10:54 AM</p>
                </div>
            </div>
        </div>
    )
}