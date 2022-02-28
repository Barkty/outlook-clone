import styles from './Sign.module.css';
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        mail: '',
        domain: ''
    });
    const handleClick = () => {
        let email = formValues.mail.concat(formValues.domain);
        console.log(email);
    }
    console.log(formValues);

    return (
        <div className={styles.signup}>
            <div className={styles.signup__logo}>
                <img src={logo} alt="Microsoft logo" className={styles.signup__logo__img}/>
            </div>
            <h1 className={styles.signup__title}>Create account</h1>
            <div className={styles.signup__form}>
                <form>
                    <input 
                    type='text'
                    id='email'
                    name='email'
                    onChange={e=>{setFormValues({mail: e.target.value})}}
                    placeholder='New email'/>
                    <select title='Listed emails' onChange={e=>{setFormValues({domain: e.target.value})}} value={formValues.domain}>
                        <option value='@outlook.com'>@outlook.com</option>
                        <option value='@hotmail.com'>@hotmail.com</option>
                    </select>
                </form>
                <button type='button' onClick={handleClick}>Next</button>
            </div>
            <div className={styles.signup__links}>
                <Link to='/'>Terms of Use</Link>
                <Link to='/'>Privacy &amp; Cookies</Link>
            </div>
        </div>
    )
}

export default SignUp;