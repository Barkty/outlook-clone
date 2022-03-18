import FormContext from "./formContext";
import { useEffect } from 'react';

const FormState = (props) => {
    const email = localStorage.getItem('email');
    useEffect(()=> {
        console.log(email);
    }, [email]);

    return (
        <FormContext.Provider value={email}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormState;