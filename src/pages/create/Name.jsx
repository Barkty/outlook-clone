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
                <div className={styles.signin__back}>
                    <p className={styles.signin__back__text}><Link to='/signup/create_password'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{user.email + user.domain}</p> 
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
                        <button type='button' onClick={()=>{handleSubmit(formik.values)}}>Next</button>
                    </form>
                </div>
                <div className={styles.signup__elinks}>
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
        navigate('/');
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapname}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <div className={styles.signin__back}>
                    <p className={styles.signin__back__text}><Link to='/signup/create_password'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{user.email + user.domain}</p> 
                </div>
                <h1 className={styles.signup__title}>What's your birthdate?</h1>
                <p className={styles.signup__text}>We need just a little more info to set up your account. Your date of birth helps us to provide you with age-appropriate settings.</p>
                <div className={styles.signup__form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.signup__form__control}>
                            <label>Country/region</label>
                            <select>
                                <option>Ghana</option>
                                <option>Niger</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div className={styles.signup__form__control}>
                            <label>Birthdate</label>
                            <div className={styles.signup__form__control}>
                                <select>
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
                            </div>
                        </div>
                        <button type='button' onClick={()=>{handleSubmit(formik.values)}}>Next</button>
                    </form>
                </div>
                <div className={styles.signup__elinks}>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Privacy &amp; Cookies</Link>
                </div>
            </div>
        </div>
    )
}