import styles from './Scenerio.module.css';
import androidOne from '../../images/androidOne.png';
import androidTwo from '../../images/androidTwo.png';
import androidThree from '../../images/androidThree.png';
import android1 from '../../images/android1.png';
import android2 from '../../images/android2.png';
import android3 from '../../images/android3.png';

const Scenerio = () => {

    return (
        <div className={styles.scenerio}>
            <div className={styles.scenerio__events}>
                <div className={styles.scenerio__events__media}>
                    <div className={styles.scenerio__events__media__singledevice} data-aos='zoom-in-left'>
                        <img src={androidOne} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice}>
                        <img src={androidTwo} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice} data-aos='zoom-in-right'>
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
                    <div className={styles.scenerio__events__media__singledevice} data-aos='zoom-in-left'>
                        <img src={android1} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice}>
                        <img src={android2} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                    <div className={styles.scenerio__events__media__singledevice} data-aos='zoom-in-right'>
                        <img src={android3} alt='Android' className={styles.scenerio__events__media__singledevice__img}/>
                    </div>
                </div>
                <div className={styles.scenerio__flights__caption}>
                    <p className={styles.scenerio__flights__caption__text}>
                        Easily check in to upcoming flights
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Scenerio;