import AOS from 'aos';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                <h1 className={styles.header__title__name}>Outlook</h1>
                <p className={styles.header__title__text}>
                    <span data-aos="fade-up-left">Connect.</span>
                    <span data-aos='taglineEmerge'>Organize.</span>
                    <span data-aos='taglineEmerge'>Get things done.</span>
                </p>
            </div>
            <div className={styles.header__bottom}>
                <div className={styles.header__bottom__para}>
                    <p className={styles.header__bottom__text} data-aos='taglineEmerge'>Free Outlook email and calender</p>
                    <p className={styles.header__bottom__text2}>Everything you need to be your most productive and connected self-at home, on the go, and everywhere in between</p>
                </div>
                <button type='button' className={styles.header__bottom__btn}>
                    <Link to='/signup'>Create free account</Link>
                </button>
            </div>
        </div>
    )
}
AOS.init();
export default Header;