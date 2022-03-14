import styles from './SignIn.module.css'
import logo from '../../images/microsoftLogo.png';
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrKey } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
//import FormContext from '../../store/formContext';
import FormState from '../../store/FormState';
//import useContextGetter from '../../hooks/UseContextGetter';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        if(values) {
            localStorage.setItem('email', values);
            navigate('set_password');
        }
    }

    return (
            <div className={styles.signin}>
                <div className={styles.signin__wrap}>
                    <div className={styles.signin__logo}>
                        <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
                    </div>
                    <h1 className={styles.signin__title}>Sign in</h1>
                    <div className={styles.signin__form}>
                        <form>
                            <input
                            type='text'
                            placeholder='Email, phone, Skype'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}/>
                            <p>No account? <Link to='/signup'>Create one!</Link></p>
                            <p><Link to='/'>Sign in with a security key</Link><AiOutlineQuestionCircle className={styles.signin__form__icon}/></p>
                            <button type='button' onClick={()=>{handleSubmit(email)}}>Next</button>
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
    //const context = useContextGetter();
    const email = localStorage.getItem('email');
    const [formValues, setFormValues] = useState({email: email, password: ''});
    const handleSubmit = (values) => {
        console.log(values);
        localStorage.setItem('isAuth', true);
        navigate('/', {replace: true});
    }
    //console.log(context);
    return (
        <FormState>
            <div className={styles.signin}>
                <div className={styles.signin__wrap}>
                    <div className={styles.signin__logo}>
                        <img src={logo} alt="Microsoft logo" className={styles.signin__logo__img}/>
                    </div>
                    <div className={styles.signin__back}>
                    <p className={styles.signin__back__text}><Link to='/login'><BsArrowLeft className={styles.signin__back__text__icon}/></Link>{email}</p> 
                    </div>
                    <h1 className={styles.signin__title}>Enter password</h1>
                    <div className={styles.signin__form}>
                        <form>
                            <input
                            type='text'
                            placeholder='Password'
                            value={formValues.password}
                            onChange={(e)=>{
                                const val = e.target.value;
                                setFormValues(prevState => { 
                                    return {...prevState, password: val}
                                })
                            }}/>
                            <p><Link to='/forgot_password'>Forgot password?</Link></p>
                            <button type='button' onClick={()=>{handleSubmit(formValues)}}>Submit</button>
                        </form>
                    </div>
                    <div className={styles.signin__links}>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Privacy &amp; Cookies</Link>
                    </div>
                </div>
            </div>
        </FormState>
    )
}