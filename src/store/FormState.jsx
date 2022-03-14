import FormContext from "./formContext";

const FormState = (props) => {
    const email = localStorage.getItem('email');
    console.log(email);

    return (
        <FormContext.Provider value={email}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormState;