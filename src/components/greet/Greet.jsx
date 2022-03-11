import styles from './Greet.module.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Greet = () => {

    return (
        <div className={styles.greet}>
            <div className={styles.greet__background}></div>
            <div className={styles.greet__con}>
                <div className={styles.greet__con__primary} data-aos='fade-up'>
                    <h1>Welcome to Outlook</h1>
                    <p>Email and calender,<br/> plus so much more</p>
                    <button type='button'>Create free account</button>
                </div>
                <div className={styles.greet__con__second}>
                    <div className={styles.greet__con__second__word} data-aos='flip-left'></div>
                    <div className={styles.greet__con__second__onedrive} data-aos='flip-left'></div>
                    <div className={styles.greet__con__second__onenote} data-aos="flip-right"></div>
                    <div className={styles.greet__con__second__outlook} data-aos="flip-right"></div>
                    <div className={styles.greet__con__second__excel} data-aos="flip-right"></div>
                    <div className={styles.greet__con__second__skype} data-aos="flip-right"></div>
                    <div className={styles.greet__con__second__ppt} data-aos="flip-right"></div>
                </div>
            </div>
            <div className={styles.greet__bottom}>
                <div className={styles.greet__bottom__background}></div>
                <div className={styles.greet__bottom__textcon} data-aos='fade-up'>
                    <h1>Expand your Outlook</h1>
                    <p>We've developed a suite of premium Outlook features for people with advanced email and calender needs. A Microsoft 365 subscription offers an ad-free interface, custom domains, enhanced security options, the full desktop version of Office, 1 TB of cloud storage. <Link to='/'>Learn about premium Outlook features that come with Microsoft 365 <HiOutlineArrowNarrowRight className={styles.__icon}/></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Greet;

export const BottomNav = () => {

    return (
        <div className={styles.bottomnav}>
            <div className={styles.bottomnav__icon}></div>
            <ul className={styles.bottomnav__primary}>
                <li>
                    <Link to='/support'>Support</Link>
                </li>
                <li>
                    <Link to='/create'>Create free account</Link>
                </li>
                <li>
                    <Link to='/premium'>Upgrade to premium</Link>
                </li>
            </ul>
            <ul className={styles.bottomnav__desktop}>
                <li>
                    <Link to='/ios'><BsApple/>Outlook for iOS</Link>
                </li>
                <li>
                    <Link to='/windows'>Outlook for Windows</Link>
                </li>
            </ul>
            <ul className={styles.bottomnav__android}>
                <li>
                    <Link to='/ios'><BsApple/>Outlook for iOS</Link>
                </li>
                <li>
                    <Link to='/andriod'><FaGooglePlay/>Outlook for Android</Link>
                </li>
            </ul>
        </div>
    )
}