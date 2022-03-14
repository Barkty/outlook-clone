import styles from './Sign.module.css';
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const SignUp = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().min(5, 'Invalid email').required('An email address is required'),
        domain: Yup.string().min(3, 'Domain is invalid').required('A domain is required'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            domain: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
        validationSchema,
    })

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
                        <button type='submit'>Next</button>
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