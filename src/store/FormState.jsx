import { FormContext } from "./formContext";
import { useEffect } from 'react';

const FormState = (props) => {
    const email = localStorage.getItem('email');
    const retrievedEmail = JSON.parse(email)
    useEffect(()=> {
        console.log(email);
        console.log(retrievedEmail);
    }, [email, retrievedEmail]);

    return (
        <FormContext.Provider value={{retrievedEmail}}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormState;