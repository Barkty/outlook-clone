import styles from './Sign.module.css';
import logo from '../../images/microsoftLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        // onSubmit: values => {
        //     console.log(values);
        // },
        validationSchema,
    })
    const handleSubmit = (values) => {
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
                    <form>
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
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className={styles.signup}>
            <div className={styles.signup__wrap}>
                <div className={styles.signup__logo}>
                    <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
                </div>
                <h1 className={styles.signup__title}>Create account</h1>
                <p>Enter the password you would like to use with your account.</p>
                <div className={styles.signup__form}>
                    <form>
                        <input
                        type='text'
                        placeholder='Create password'
                        // value={formValues.password}
                        // onChange={(e)=>{
                        //     const val = e.target.value;
                        //     setFormValues(prevState => { 
                        //         return {...prevState, password: val}
                        //     })
                        // }}
                        />
                        <div className={styles.signup__form__control}>
                            <input type="checkbox" name="show" id="show" />
                            <label htmlFor='show'>Show password</label>
                        </div>
                        <div className={styles.signup__form__control}>
                            <input type="checkbox" name="inform" id="inform" defaultChecked/>
                            <label htmlFor='inform'>I would like information, tips and offers about Microsoft products and services.</label>
                        </div>
                        <p>Choosing <b>Next</b> means that you agree to the <Link to='/policies'>Microsoft Services Agreement</Link> and <Link>privacy and cookies statement.</Link></p>
                        <button type='button' onClick={()=>{handleSubmit()}}>Next</button>
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