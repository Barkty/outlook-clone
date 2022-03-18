import { useContext } from 'react';
import FormContext from '../store/formContext';

const useContextGetter = () => {
    const context = useContext(FormContext);
    console.log(context);
    return context;
}

export default useContextGetter;