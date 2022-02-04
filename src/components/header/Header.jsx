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
            <div>
                <p></p>
            </div>
        </div>
    )
}
export default Header;