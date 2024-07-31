import { useState, useRef, useEffect } from "react"

export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);

    const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus()
	},[])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault()

        submitCallBack(values)
    };

    return {
        values,
        changeHandler,
        submitHandler,
        inputRef,
    };
};