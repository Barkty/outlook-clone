import styles from './SignIn.module.css'
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrKey } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
//import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
//import { FormContext, FormState } from '../../store/formContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//import useContextGetter from '../../hooks/UseContextGetter';
import { Spinner } from 'react-bootstrap';

const SignIn = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string('Email is not valid').email().required('An email address is required'),
    })
    const handleSignin = (values) => {
        if(values) {
            localStorage.setItem('email', JSON.stringify(values));
            console.log(values)
            navigate('set_password');
        };
    }
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: handleSignin,
        validationSchema,
    })

    return (
            <div className={styles.signin}>
                <div className={styles.signin__wrap}>
                    <div className={styles.signin__logo}>
                        <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
                    </div>
                    <h1 className={styles.signin__title}>Sign in</h1>
                    <div className={styles.signin__form}>
                        <form onSubmit={formik.handleSubmit}>
                            <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='Email, phone, Skype'
                            value={formik.values.email}
                            onChange={formik.handleChange}/>
                            {formik.errors.email && formik.touched.email ? (
                            <span className={styles.signin__form__error}>{formik.errors.email}</span>
                        ) : null}
                            <p>No account? <Link to='/signup'>Create one!</Link></p>
                            <p><Link to='/'>Sign in with a security key</Link><AiOutlineQuestionCircle className={styles.signin__form__icon}/></p>
                            <button type='submit' disabled={formik.isSubmitting}>
                                {!formik.isSubmitting ? ("Next") : (<Spinner animation="border" variant="light"/>)}
                            </button>
                        </form>
                    </div>
                    <div className={styles.signin__options}>
                        <p><Link to='/'><GrKey className={styles.signin__options__icon}/> Sign-in options</Link></p>
                    </div>
                    <div className={styles.signin__links}>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Privacy &amp; Cookies</Link>
                    </div>
                </div>
            </div>
    )
}

export default SignIn;

export const EnterPassword = () => {
    const navigate = useNavigate();
    //const emailContext = useContext(FormContext)
    //console.log('context: ', FormContext.Consumer);
    //console.log('usecontext: ', useContext(FormContext));
    const email = localStorage.getItem('email');
    const reversedEmail = JSON.parse(email)
    //console.log(reversedEmail);
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password is required!')
    })
    const handleSignin = (values) => {
        if(values) {
            console.log(values)
            //localStorage.setItem('email', values);
            navigate('/');
        };
    }
    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: handleSignin,
        validationSchema,
    })
    
    return (
        
            <div className={styles.signin}>
                <div className={styles.signin__wrap}>
                    <div className={styles.signin__logo}>
                        <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
                    </div>
                    <div className={styles.signin__back}>
                        <p className={styles.signin__back__text}><Link to='/login'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{reversedEmail.email}</p> 
                    </div>
                    <h1 className={styles.signin__title}>Enter password</h1>
                    <div className={styles.signin__form}>
                        <form onSubmit={formik.handleSubmit}>
                            <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}/>
                            {formik.errors.password && formik.touched.password ? (
                            <span className={styles.signin__form__error}>{formik.errors.password}</span>
                        ) : null}
                            <p><Link to='/forgot_password'>Forgot password?</Link></p>
                            <button type='submit' disabled={formik.isSubmitting}>
                                {!formik.isSubmitting ? ("Submit") : (<Spinner animation="border" variant="light"/>)}
                            </button>
                        </form>
                    </div>
                    <div className={styles.signin__links}>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Privacy &amp; Cookies</Link>
                    </div>
                </div>
            </div>
        
    )
}