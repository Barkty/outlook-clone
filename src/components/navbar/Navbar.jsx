import styles from './Navbar.module.css';
import logo from '../../images/outlook.png'

const Navbar = () => {

    return (
        <div className={styles.top} role='navigation'>
            <div className={styles.top__inner}>
                <a data-m='{"cN": "MICROSOFT", "sN": "P6", "pV": "1"}' href='https://www.microsoft.com' title='Microsoft' target="_blank" className={styles.top__inner__logo}>
                    <img src={logo} alt='Logo' className={styles.top__inner__logo__img}/>
                    {/* Microsoft */}
                </a>
                <nav aria-label='Quick links' className={styles.top__inner__nav}>
                    <ul className={styles.top__inner__nav__ul}>
                        <li className={styles.top__inner__nav__ul__link}>
                            <a href='https://www.microsoft.com/en-ww/microsoft-365/outlook/outlook-personal-email-plans?ocid=PROD_outlook_cons_outlook_ups_OL-Web_May19UI&rtc=1' role='button'>Try Premium</a>
                        </li>
                        <li className={styles.top__inner__nav__ul__link}>
                            <a role='button' href='#'>Sign in</a>
                        </li>
                        {/* <li className={styles.top__inner__nav__ul__link}>
                            <a role='button'>Create account</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;