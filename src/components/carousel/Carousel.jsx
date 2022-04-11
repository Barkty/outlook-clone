import { Children, cloneElement, useState, useEffect } from 'react';
import styles from './Carousel.module.css';

export const CarouselItem = ({ children, width}) => {
    return (
        <div className={styles.carousel__item} style={{ width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({ children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }
    // const [hover, setHover] = useState('');
    // const handleHover = (menu) => {
    //     setHover(menu);
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__inner} style={{ transform: `translateX(-${activeIndex * 80}%)` }}>
                {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: '80%' })
                })}
            </div>
            {/* <div className={styles.carousel__indicators}>
                <button className={`${styles.carousel__button} ${hover === 'Left' ? styles.carousel__button__hover : ''}`} onClick={() => {
                    updateIndex(activeIndex - 1);
                }} onMouseEnter={() => {handleHover('Left')}} aria-label={left}>
                    <FontAwesomeIcon icon={['fas', 'chevron-left']}/>
                </button>
                <button className={`${styles.carousel__button} ${hover === 'Right' ? styles.carousel__button__hover : ''}`} onClick={() => {
                    updateIndex(activeIndex + 1);
                }} onMouseEnter={() => {handleHover('Right')}} aria-label={right}>
                    <FontAwesomeIcon icon={['fas', 'chevron-right']}/>
                </button>
            </div> */}
        </div>
    )
}

export default Carousel;