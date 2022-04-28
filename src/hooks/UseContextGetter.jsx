import { useContext } from 'react';
import FormContext from '../store/formContext';

const useContextGetter = () => {
    return useContext(FormContext);
}

export default useContextGetter;