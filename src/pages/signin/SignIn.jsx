import styles from './SignIn.module.css'
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrKey } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import useContextGetter from '../../hooks/UseContextGetter';

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
    const auth = useContextGetter();
    console.log(auth);
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password is required!')
    })
    const handleSignin = (values) => {
        if(values) {
            console.log(values)
            //localStorage.setItem('email', values);
            navigate('secure');
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
                        <p className={styles.signin__back__text}><Link to='/login'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{auth.email.email}</p> 
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

export const SignedIn = () => {
    const navigate = useNavigate();
    const auth = useContextGetter();
    const [signedIn, setSignedIn] = useState('')
    const handleStaySigned = (value) => {
        setSignedIn(value);
        console.log(signedIn)
        navigate('/mail/0/inbox')
    }
    return (
        <div className={styles.signin}>
            <div className={styles.signin__wrap}>
                    <div className={styles.signin__logo}>
                        <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
                    </div>
                    <div className={styles.signin__back}>
                        <p className={styles.signin__back__text}>{auth.email.email}</p> 
                    </div>
                    <h1 className={styles.signin__title}>Stay signed in?</h1>
                    <p className={styles.signin__text}>Stay signed in so you don't have to sign in again next time.</p>
                    <div className={styles.signin__control}>
                        <input type="checkbox" name="show" id="show" className={styles.signin__control__checkbox}/>
                        <label htmlFor='show'>Don't show this again</label>
                    </div>
                    <div className={styles.signin__buttons}>
                        <button type='button' className={styles.signin__buttons__no} onClick={()=>{handleStaySigned('No')}}>
                           No 
                        </button>
                        <button type='button' className={styles.signin__buttons__yes} onClick={()=>{handleStaySigned('Yes')}}>
                           Yes 
                        </button>
                    </div>
                    <div className={styles.signin__links}>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Privacy &amp; Cookies</Link>
                    </div> 
            </div>
        </div>
    )
}