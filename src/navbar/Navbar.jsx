import styles from './Navbar.module.css';

const Navbar = () => {

    return (
        <div className={styles.top} role='navigation'>
            <div className={styles.top__inner}>
                <a data-m='{"cN": "MICROSOFT", "sN": "P6", "pV": "1"}' href='https://www.microsoft.com' title='Microsoft' target="_blank" className={styles.top__inner__logo}>Microsoft</a>
                <nav aria-label='Quick links'>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;