import styles from './Products.module.css'

const Products = () => {

    return (
        <div className={styles.productswrap}>
            <div className={styles.productswrap__header}>
                <h1>
                    <span className={styles.productswrap__header__span}>Access to Office.</span>
                    <span className={styles.productswrap__header__child}>For free</span>
                </h1>
            </div>
        </div>
    )
}

export default Products;