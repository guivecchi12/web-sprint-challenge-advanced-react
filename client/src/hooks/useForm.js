// write your custom hook here to control your checkout form

import { useLocalStorage } from './useLocalStorage';


export const useForm = (iValue, key) => {
    const [values, setValue] = useLocalStorage(iValue, key);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue({...values, success: true})
      };
    
    const handleChanges = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value, success:false });
    };
    // console.log(values);

    return [values, handleChanges, handleSubmit];
}