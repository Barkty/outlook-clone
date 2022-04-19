import styles from './Navbar.module.css'
import { CgCheckO, CgChevronDown } from 'react-icons/cg'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Mail = () => {
    const [active, setActive] = useState('Focus');
    const [mail, setMail] = useState('mail1');
    
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
            <div className={mail === 'mail1' ? styles.mail__userActive : styles.mail__user} onClick={()=>setMail('mail1')}>
                <div className={mail === 'mail1' ? styles.mail__user__iconActive : styles.mail__user__icon}></div>
                <div className={styles.mail__user__mess}>
                    <p>Microsoft Account Team</p>
                    <p>New apps connected to your....</p>
                    <p>Microsoft account New app(s) connected to your ....</p>
                </div>
                <div className={styles.mail__user__time}>
                    <p>Tue 3/29</p>
                </div>
            </div>
            <div className={mail === 'mail2' ? styles.mail__userActive : styles.mail__user} onClick={()=>setMail('mail2')}>
                <div className={mail === 'mail2' ? styles.mail__user__iconActive : styles.mail__user__icon}></div>
                <div className={styles.mail__user__mess}>
                    <p>Outlook Team</p>
                    <p>Welcome to your new Outl....</p>
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
            <div className={styles.email__cont}>
                <div className={styles.email__cont__con}>
                    <div className={styles.email__cont__con__sub}>
                    <p> <AiOutlineInfoCircle className={styles.email__cont__con__sub__icon}/>
                        Getting too much email? <Link to='/'> Unsubscribe </Link>| <Link to='/'> Manage </Link></p>
                    </div>
                    <div className={styles.email__cont__con__logo}>
                        <div className={styles.email__cont__con__logo__icon}></div>
                    </div>
                    <div className={styles.email__cont__con__mail}>
                        <p className={styles.email__cont__con__mail__team}>Microsoft account team &lt;account-security-noreply&#64;accountprotection.microsoft.com&gt;</p>
                        <p className={styles.email__cont__con__mail__date}>Tue 3/29/2022 10:54 AM</p>
                        <p className={styles.email__cont__con__mail__recieve}>To: You</p>
                        <h3 className={styles.email__cont__con__mail__mic}>Microsoft account</h3>
                        <p className={styles.email__cont__con__mail__app}>New app(s) have access to your data</p>
                        <p className={styles.email__cont__con__mail__amb}>StudentAmbassadors-API connected to the Microsoft account <Link to='/'>gb**e&#64;outlook.com.</Link></p>
                        <p className={styles.email__cont__con__mail__acc}>If you didn't grant this access, please remove the app(s) from your account.</p>
                        <button className={styles.email__cont__con__mail__btn}>Manage your apps</button>

                        <p className={styles.email__cont__con__mail__opt}>You can also opt out or change where you receive security notifications.</p>
                        <p className={styles.email__cont__con__mail__opt}>Thanks,</p>
                        <p className={styles.email__cont__con__mail__man}>The Microsoft account team</p>
                        <div className={styles.email__cont__con__mail__links}>
                            <Link to='/'>Reply</Link>
                            <div></div>
                            <Link to='/'>Forward</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}