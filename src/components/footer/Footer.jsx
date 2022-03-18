import styles from './Footer.module.css';
import logo from '../../images/outlook.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={logo} alt='Microsoft Logo' className={styles.footer__logo__image}/>
            </div>
            <div className={styles.footer__links}>
                <p>&copy; 2021 Microsoft</p>
                <ul className={styles.footer__links__list}>
                    <li>
                        <Link to='/'>Privacy &amp; cookies</Link>
                    </li>
                    <li>
                        <Link to='/'>Terms of use</Link>
                    </li>
                    <li>
                        <Link to='/'>About our ads</Link>
                    </li>
                    <li>
                        <Link to='/'>Trademarks</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;