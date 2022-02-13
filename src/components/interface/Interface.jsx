import styles from './Interface.module.css';
import people from '../../images/people.png';
import task from '../../images/tasks.png';
import search from '../../images/search.png';
import { AiOutlineMail } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { CgUserList, CgGoogleTasks } from 'react-icons/cg'
import { VscSearch } from 'react-icons/vsc'

const Interface = () => {

    return (
        <div className={styles.interface}>
            <div className={styles.interface__products}>
                <div className={styles.interface__products__product1}></div>
                <div className={styles.interface__products__product2}></div>
                <div className={styles.interface__products__product1}>
                    <img src={people} alt='People' className={styles.interface__products__product1__people}/>
                </div>
                <div className={styles.interface__products__product1}>
                    <img src={task} alt='People' className={styles.interface__products__product1__people}/>
                </div>
                <div className={styles.interface__products__product1}>
                    <img src={search} alt='People' className={styles.interface__products__product1__people}/>
                </div>
            </div>
            <div className={styles.interface__controller}>
                <div className={styles.interface__controller__btns}>
                    <button type='button'>
                        <AiOutlineMail className={styles.interface__controller__btns__icon}/>
                        <p>Email</p>
                    </button>
                    <button type='button'>
                        <GoCalendar className={styles.interface__controller__btns__icon}/>
                        <p>Calender</p>
                    </button>
                    <button type='button'>
                        <CgUserList className={styles.interface__controller__btns__icon}/>
                        <p>People</p>
                    </button>
                    <button type='button'>
                        <CgGoogleTasks className={styles.interface__controller__btns__icon}/>
                        <p>Tasks</p>
                    </button>
                    <button type='button'>
                        <VscSearch className={styles.interface__controller__btns__icon}/>
                        <p>Search</p>
                    </button>
                </div>
                <ul className={styles.interface__controller__list}>
                    <li className={styles.interface__controller__list__text}></li>
                </ul>
            </div>
        </div>
    )
}

export default Interface;