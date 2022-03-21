import styles from './Sign.module.css';
import logo from '../../images/microsoftLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsArrowLeft } from 'react-icons/bs'

const SignUp = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().min(5, 'Invalid email').required('An email address is required'),
        domain: Yup.string().min(3, 'Domain is invalid').required('A domain is required'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            domain: '',
        },
        //onSubmit: handleSubmit(formik.values),
        validationSchema,
    })
    const handleSubmit = (values) => {
        localStorage.setItem('newAccount', JSON.stringify(values));
        console.log(values);
        navigate('create_password');
    }
    
    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrap}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <h1 className={styles.signup__title}>Create account</h1>
                <div className={styles.signup__form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.signup__form__field}>
                            <input 
                            type='text'
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder='New email'/>
                            <select title='Listed emails'
                                name='domain' 
                                id='domain' 
                                onChange={formik.handleChange} 
                                value={formik.values.domain}>
                                <option value='@outlook.com'>@outlook.com</option>
                                <option value='@hotmail.com'>@hotmail.com</option>
                            </select>
                        </div>
                        {formik.errors.email && formik.touched.email ? (
                            <span className={styles.signup__form__field__error}>{formik.errors.email}</span>
                        ) : null}
                        <button type='button' onClick={()=>{handleSubmit(formik.values)}}>Next</button>
                    </form>
                </div>
                <div className={styles.signup__links}>
                    <Link to='/'>Terms of Use</Link>
                    <Link to='/'>Privacy &amp; Cookies</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

export const AccountPassword = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password is required!')
    });
    const navigate = useNavigate();
    const retrievedUser = localStorage.getItem('newAccount')
    const user = JSON.parse(retrievedUser);
    const handleSubmit = (values) => {
        console.log(values);
        navigate('/set_name', {replace: true});
    }
    const formik = useFormik({
        initialValues: {
            email: user.email + user.domain,
            password: '',
            inform: 1
        },
        validationSchema: validationSchema,
        //onSubmit: handleSubmit(formik.values)
    })
    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrapper}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <div className={styles.signin__back}>
                    <p className={styles.signin__back__text}><Link to='/signup'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{user.email + user.domain}</p> 
                </div>
                <h1 className={styles.signup__title}>Create a password</h1>
                <p className={styles.signup__text}>Enter the password you would like to use with your account.</p>
                <div className={styles.signup__form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.signup__form__control}>
                            <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Create password'
                            className={styles.signup__form__control__input}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.password && formik.touched.password ? (
                            <span className={styles.signup__form__field__error}>{formik.errors.password}</span>
                        ) : null}
                        <div className={styles.signup__form__control}>
                            <input type="checkbox" name="show" id="show" className={styles.signup__form__control__checkbox}/>
                            <label htmlFor='show'>Show password</label>
                        </div>
                        <div className={styles.signup__form__control}>
                            <input type="checkbox" 
                            name="inform"
                            id="inform" 
                            defaultChecked 
                            className={styles.signup__form__control__checkbox}
                            value={formik.values.inform}
                            onChange={formik.handleChange}/>
                            <label htmlFor='inform'>I would like information, tips and offers about Microsoft products and services.</label>
                        </div>
                        <p className={styles.signup__info}>Choosing <b>Next</b> means that you agree to the <Link to='/policies'>Microsoft Services Agreement</Link> and <Link to='/privacy'>privacy and cookies statement.</Link></p>
                        <button type='submit' onClick={()=>{handleSubmit(formik.values)}}>Next</button>
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