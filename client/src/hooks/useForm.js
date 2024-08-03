import { useState, useRef, useEffect } from "react";

export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);
    const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
        
        setValues(initialValues);
	},[initialValues]);
    
    const changeHandler = (e) => {
        e.preventDefault();

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await submitCallBack(values);

        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        inputRef,
    };
};