import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.header__title}>
                <h1 className={styles.header__title__name}>Outlook</h1>
                <p className={styles.header__title__text}>
                    <span>Connect.</span>
                    <span>Organize.</span>
                    <span>Get things done.</span>
                </p>
            </div>
            <div className={styles.header__bottom}>
                <p className={styles.header__bottom__text}>Free Outlook email and calender</p>
                <button type='button' className={styles.header__bottom__btn}>Create free account</button>
            </div>
        </div>
    )
}
export default Header;