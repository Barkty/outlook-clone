import FormContext from "./formContext";

const FormState = ({ children }) => {
    const email = JSON.parse(localStorage.getItem('email'));

    return (
        <FormContext.Provider value={{email}}>
            {children}
        </FormContext.Provider>
    )
}
export default FormState;