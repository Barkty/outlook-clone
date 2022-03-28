import styles from './Sign.module.css'
import logo from '../../images/microsoftLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsArrowLeft } from 'react-icons/bs';

const Name = () => {
    const navigate = useNavigate();
    const retrievedUser = localStorage.getItem('newAccount')
    const user = JSON.parse(retrievedUser);
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, 'Firstname must be 3 characters or more').required('Firstname is required!'),
        lastname: Yup.string().min(3, 'Lasttname must be 3 characters or more').required('Lastname is required!')
    });
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
        },
        validationSchema: validationSchema,
        //onSubmit: handleSubmit(formik.values)
    })
    const handleSubmit = (values) => {
        console.log(values);
        navigate('set_birthday');
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapname}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <div className={styles.signup__back}>
                    <p className={styles.signup__back__text}><Link to='/signup/create_password'><BsArrowLeft className={styles.signup__back__text__icon}/></Link>{user.email + user.domain}</p> 
                </div>
                <h1 className={styles.signup__title}>What's your name?</h1>
                <p className={styles.signup__text}>We need just a little more info to set up your account.</p>
                <div className={styles.signup__form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.signup__form__control}>
                            <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            placeholder='Firstname'
                            className={styles.signup__form__control__input}
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.firstname && formik.touched.firstname ? (
                            <span className={styles.signup__form__field__error}>{formik.errors.firstname}</span>
                        ) : null}
                        <div className={styles.signup__form__control}>
                            <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            placeholder='Lastname'
                            className={styles.signup__form__control__input}
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.lastname && formik.touched.lastname ? (
                            <span className={styles.signup__form__field__error}>{formik.errors.firstname}</span>
                        ) : null}
                        <button type='button' onClick={()=>{handleSubmit(formik.values)}} className={styles.signup__form__button}>Next</button>
                    </form>
                </div>
                <div className={styles.signup__namelinks}>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Privacy &amp; Cookies</Link>
                </div>
            </div>
        </div>
    )
}

export default Name;

export const Birthday = () => {
    const navigate = useNavigate();
    const retrievedUser = localStorage.getItem('newAccount')
    const user = JSON.parse(retrievedUser);
    const validationSchema = Yup.object().shape({
        
    });
    const formik = useFormik({
        initialValues: {
            country: '',
            month: '',
            day: '',
            year: '',
        },
        validationSchema: validationSchema,
        //onSubmit: handleSubmit(formik.values)
    })
    const handleSubmit = (values) => {
        console.log(values);
        navigate('puzzle');
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapbirth}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <div className={styles.signup__back}>
                    <p className={styles.signup__back__text}><Link to='/signup/create_password'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{user.email + user.domain}</p> 
                </div>
                <h1 className={styles.signup__title2}>What's your birthdate?</h1>
                <p className={styles.signup__text}>We need just a little more info to set up your account. Your date of birth helps us to provide you with age-appropriate settings.</p>
                <div className={styles.signup__form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={`${styles.signup__form__controls}`}>
                            <label>Country/region</label>
                            <select className={styles.signup__form__controls__select}>
                                <option>Ghana</option>
                                <option>Niger</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div className={`${styles.signup__form__controls}`}>
                            <label>Birthdate</label>
                            <div className={styles.signup__form__controlsel}>
                                <select className={styles.signup__form__controlsel__select}>
                                    <option>Month</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>Aug</option>
                                    <option>Sept</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option>Dec</option>
                                </select>
                                <select className={styles.signup__form__controlsel__select}>
                                    <option>Day</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                                <input type='text' id='year' name='year' className={styles.signup__form__controlsel__input}/>
                            </div>
                        </div>
                        <button type='button' onClick={()=>{handleSubmit(formik.values)}} className={styles.signup__form__button1}>Next</button>
                    </form>
                </div>
                <div className={styles.signup__namelinks}>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Privacy &amp; Cookies</Link>
                </div>
            </div>
        </div>
    )
}

export const Puzzle = () => {
    const retrievedUser = localStorage.getItem('newAccount')
    const user = JSON.parse(retrievedUser);

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapname}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <div className={styles.signup__back}>
                    <p className={styles.signup__back__text}><Link to='/signup/create_password'><BsArrowLeft className={styles.signup__back__text__icon}/></Link>{user.email + user.domain}</p> 
                </div>
                <h1 className={styles.signup__title}>Create account</h1>
                <p className={styles.signup__text}>Please solve the puzzle so we know you are not a robot.</p>
                <button type='button' className={styles.signup__pbutton}>Next</button>

                <div className={styles.signup__namelinks}>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Privacy &amp; Cookies</Link>
                </div>
            </div>
        </div>
    )
}