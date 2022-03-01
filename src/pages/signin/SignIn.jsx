import styles from './SignIn.module.css'
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrKey } from 'react-icons/gr'

const SignIn = () => {

    return (
        <div className={styles.signin}>
            <div className={styles.signin__logo}>
                <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
            </div>
            <h1 className={styles.signin__title}>Sign in</h1>
            <div className={styles.signin__form}>
                <form>
                    <input
                    type='text'
                    placeholder='Email, phone, Skype'/>
                    <p>No account? <Link to='/signup'>Create one!</Link></p>
                    <p><Link to='/'>Sign in with a security key</Link><AiOutlineQuestionCircle className={styles.signin__form__icon}/></p>
                    <button type='submit'>Next</button>
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
    )
}

export default SignIn;