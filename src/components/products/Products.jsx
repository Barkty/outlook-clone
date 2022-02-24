import styles from './Products.module.css'

const Products = () => {

    return (
        <div className={styles.productswrap}>
            <div className={styles.productswrap__header}>
                <h1>
                    <span className={styles.productswrap__header__span}>Access to Office.</span>
                    <span className={styles.productswrap__header__child}>For free.</span>
                </h1>
            </div>

            {/* Carousel mini */}
            <div className={styles.productswrap__carouselMini}>
                <div className={styles.productswrap__carouselMini__word}>
                    <div className={styles.productswrap__carouselMini__word__art}></div>
                    <h1>Word</h1>
                </div>
                <div className={styles.productswrap__carouselMini__excel}>
                    <div className={styles.productswrap__carouselMini__excel__art}></div>
                    <h1>Excel</h1>
                </div>
                <div className={styles.productswrap__carouselMini__ppt}>
                    <div className={styles.productswrap__carouselMini__ppt__art}></div>
                    <h1>PowerPoint</h1>
                </div>
            </div>
    
            {/* Carousel large */}
            <div className={styles.productswrap__carousel}></div>

            {/* Article */}
            <article className={styles.productswrap__article}>
                <p>Collaborating is easy with <span>Word</span>, <span>PowerPoint</span> and <span>Excel</span>. You can chat in real time with <span>Skype-</span> right from your inbox.</p>
            </article>

            <div className={styles.productswrap__appIcons}>
                <div className={styles.productswrap__appIcons__outlook}>
                    <div className={styles.productswrap__appIcons__outlook__spinner}>
                        <i className={styles.productswrap__appIcons__outlook__spinner__word}></i>
                        <i className={styles.productswrap__appIcons__outlook__spinner__ppt}></i>
                        <i className={styles.productswrap__appIcons__outlook__spinner__onedrive}></i>
                        <i className={styles.productswrap__appIcons__outlook__spinner__onenote}></i>
                        <i className={styles.productswrap__appIcons__outlook__spinner__skype}></i>
                        <i className={styles.productswrap__appIcons__outlook__spinner__excel}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;