import styles from './Scenerio.module.css';
import androidOne from '../../images/androidOne.png';
import androidTwo from '../../images/androidTwo.png';
import androidThree from '../../images/androidThree.png';

const Scenerio = () => {

    return (
        <div className={styles.scenerio}>
            <div className={styles.scenerio__events}>
                <div className={styles.scenerio__events__media}>
                    <div className={styles.scenerio__events__media__singledevice}>
                        <img src={androidOne} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice}>
                        <img src={androidTwo} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice}>
                        <img src={androidThree} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                </div>
                <div className={styles.scenerio__events__caption}>
                    <p className={styles.scenerio__events__caption__text}>
                        Simplify scheduling by sending your availabilty
                    </p>
                </div>
            </div>
            <div className={styles.scenerio__flights}>
                <div className={styles.scenerio__flights__events}>

                </div>
                <div className={styles.scenerio__events__caption}>
                    <p className={styles.scenerio__events__caption__text}>
                        Easily check in to upcoming flights
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Scenerio;