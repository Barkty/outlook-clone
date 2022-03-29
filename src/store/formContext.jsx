import { createContext } from 'react';
import { useEffect } from 'react';

export const FormContext = createContext();


export const FormState = (props) => {
    const email = localStorage.getItem('email');
    const retrievedEmail = JSON.parse(email)
    useEffect(()=> {
        console.log(email);
        console.log(retrievedEmail);
    }, [email, retrievedEmail]);

    return (
        <FormContext.Provider value={retrievedEmail}>
            {props.children}
        </FormContext.Provider>
    )
}