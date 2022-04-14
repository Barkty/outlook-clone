import FormContext from "./formContext";

const FormState = ({ children }) => {
    const email = JSON.parse(localStorage.getItem('email'));
    console.log(email)
    return (
        <FormContext.Provider value={{email}}>
            {children}
        </FormContext.Provider>
    )
}
export default FormState;