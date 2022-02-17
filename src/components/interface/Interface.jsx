import styles from './Interface.module.css';
import people from '../../images/people.png';
import task from '../../images/tasks.png';
import search from '../../images/search.png';
import { AiOutlineMail } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { CgUserList, CgGoogleTasks } from 'react-icons/cg'
import { VscSearch } from 'react-icons/vsc'
import { MdArrowDropUp } from 'react-icons/md'
import { useState } from 'react';

const Interface = () => {
    const [active, setActive] = useState('Email');
    const handleClick = (menu) => {
        setActive(menu);
    }

    return (
        <div className={styles.interface}>
            <div className={styles.interface__products}>
                <div className={`${styles.interface__products__product1} ${active === 'Email' ? styles.interface__products__active1 : ''}`}></div>
                <div className={`${styles.interface__products__product2} ${active === 'Calender' ? styles.interface__products__active2 : ''}`}></div>
                <div className={`${styles.interface__products__product1} ${active === 'People' ? styles.interface__products__active1 : ''}`}>
                    <img src={people} alt='People' className={styles.interface__products__active1__people}/>
                </div>
                <div className={`${styles.interface__products__product1} ${active === 'Tasks' ? styles.interface__products__active1 : ''}`}>
                    <img src={task} alt='Tasks' className={styles.interface__products__active1__task}/>
                </div>
                <div className={`${styles.interface__products__product1} ${active === 'Search' ? styles.interface__products__active1 : ''}`}>
                    <img src={search} alt='Search' className={styles.interface__products__active1__search}/>
                </div>
            </div>
            <div className={styles.interface__controller}>
                <div className={styles.interface__controller__btns}>
                    <button type='button' onClick={()=> {handleClick('Email')}} className={`${styles.interface__controller__btns__button} ${active === 'Email' ? styles.interface__controller__btns__active : ''}`}>
                        <MdArrowDropUp className={`${styles.interface__controller__btns__up} ${active === 'Email' ? styles.interface__controller__btns__upactive : ''}`}/>
                        <AiOutlineMail className={styles.interface__controller__btns__icon}/>
                        <p>Email</p>
                    </button>
                    <button type='button' onClick={()=> {handleClick('Calender')}} className={`${styles.interface__controller__btns__button} ${active === 'Calender' ? styles.interface__controller__btns__active : ''}`}>
                        <MdArrowDropUp className={`${styles.interface__controller__btns__up} ${active === 'Calender' ? styles.interface__controller__btns__upactive : ''}`}/>
                        <GoCalendar className={styles.interface__controller__btns__icon}/>
                        <p>Calender</p>
                    </button>
                    <button type='button' onClick={()=> {handleClick('People')}} className={`${styles.interface__controller__btns__button} ${active === 'People' ? styles.interface__controller__btns__active : ''}`}>
                        <MdArrowDropUp className={`${styles.interface__controller__btns__up} ${active === 'People' ? styles.interface__controller__btns__upactive : ''}`}/>
                        <CgUserList className={styles.interface__controller__btns__icon}/>
                        <p>People</p>
                    </button>
                    <button type='button' onClick={()=> {handleClick('Tasks')}} className={`${styles.interface__controller__btns__button} ${active === 'Tasks' ? styles.interface__controller__btns__active : ''}`}>
                        <MdArrowDropUp className={`${styles.interface__controller__btns__up} ${active === 'Tasks' ? styles.interface__controller__btns__upactive : ''}`}/>
                        <CgGoogleTasks className={styles.interface__controller__btns__icon}/>
                        <p>Tasks</p>
                    </button>
                    <button type='button' onClick={()=> {handleClick('Search')}} className={`${styles.interface__controller__btns__button} ${active === 'Search' ? styles.interface__controller__btns__active : ''}`}>
                        <MdArrowDropUp className={`${styles.interface__controller__btns__up} ${active === 'Search' ? styles.interface__controller__btns__upactive : ''}`}/>
                        <VscSearch className={styles.interface__controller__btns__icon}/>
                        <p>Search</p>
                    </button>
                </div>
                <ul className={styles.interface__controller__list} aria-hidden='true' data-current='5'>
                    <li className={`${styles.interface__controller__list__text} ${active === 'Email' ? styles.interface__controller__list__active : ''}`}>Send, receive, and manage your email.</li>
                    <li className={`${styles.interface__controller__list__text} ${active === 'Calender' ? styles.interface__controller__list__active : ''}`}>Schedule and manage appointments, meetings, or events.</li>
                    <li className={`${styles.interface__controller__list__text} ${active === 'People' ? styles.interface__controller__list__active : ''}`}>See details about contacts when you hover over their name.</li>
                    <li className={`${styles.interface__controller__list__text} ${active === 'Tasks' ? styles.interface__controller__list__active : ''}`}>Prioritize your tasks with Microsoft To Do.</li>
                    <li className={`${styles.interface__controller__list__text} ${active === 'Search' ? styles.interface__controller__list__active : ''}`}>Locate messages, people and documents.</li>
                </ul>
            </div>
        </div>
    )
}

export default Interface;