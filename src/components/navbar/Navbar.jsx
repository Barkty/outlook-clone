import styles from './Navbar.module.css';
import logo from '../../images/outlook.png'
import navLogo from '../../images/outlook-icon.jpg';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    //logo scroll when active
    const [navbarLogo, setNavbarLogo] = useState(logo);

    const changeBackground = () => {
        //console.log(Math.round(window.scrollY))
        if (window.scrollY >= 54) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }

    //logo scroll function
    const changeLogo = () => {
        if (window.scrollY >= 54) {
        setNavbarLogo(navLogo)
        } else {
        setNavbarLogo(logo)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)
    }, [])

    useEffect(() => {
        changeLogo()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeLogo)
    })



    return (
        <div className={navbar ? styles.topActive : styles.top} role='navigation' id='nav'>
            <div className={styles.top__inner}>
                <a data-m='{"cN": "MICROSOFT", "sN": "P6", "pV": "1"}' href='https://www.microsoft.com' title='Microsoft' target="_blank" rel='noreferrer' className={navbar ? styles.top__inner__navlogo : styles.top__inner__logo}>
                    <img src={navbarLogo} alt='Logo' className={styles.top__inner__logo__img}/>
                    {/* Microsoft */}
                </a>
                <nav aria-label='Quick links' className={navbar ? styles.top__inner__navbar : styles.top__inner__nav}>
                    <ul className={styles.top__inner__nav__ul}>
                        <li className={navbar ? styles.top__inner__nav__ul__premium : styles.top__inner__nav__ul__link}>
                            <a href='https://www.microsoft.com/en-ww/microsoft-365/outlook/outlook-personal-email-plans?ocid=PROD_outlook_cons_outlook_ups_OL-Web_May19UI&rtc=1' role='button'>Try Premium</a>
                        </li>
                        <li className={navbar ? styles.top__inner__nav__ul__premium : styles.top__inner__nav__ul__sec}>
                            <a role='button' href='/login'>Sign in</a>
                        </li>
                        <li className={navbar ? styles.top__inner__nav__ul__create : styles.top__inner__nav__ul__last}>
                            <a role='button' href='/signup'>Create account</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;