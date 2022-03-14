import { useContext } from 'react';
import FormContext from '../store/formContext';

const useContextGetter = () => {
    const context = useContext(FormContext);
    return context;
}

export default useContextGetter;