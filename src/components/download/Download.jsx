import styles from './Download.module.css';
//import computer from '../../images/efficient-commuter.jpg';

const Download = () => {

    return (
        <div className={styles.download}>
            <div className={styles.download__image}></div>
            <div className={styles.download__overlay} data-aos="fade-up">
                <h1>Email and calender, together in one place</h1>
                <p>Stay on top of your most important messages and events</p>
            </div>
        </div>
    )
}

export default Download;