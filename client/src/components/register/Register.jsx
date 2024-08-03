import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";

const initialUserFormValues = {
	email: '',
    password: '',
    rePassword: '',
};

export default function Register() {
    const [ error, setError ] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, rePassword }) => {
        if(password !== rePassword) {
            setError('Password missmatch!!!')
            return;
        }

        try {
            await register(email, password)
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    };

    const { 
        values,
        changeHandler,
        submitHandler,
        inputRef 
    } = useForm(initialUserFormValues, registerHandler);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="email"
                                    name="email"
                                    type="email"
                                    ref={inputRef}
                                    value={values.email}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Repeat Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="password"
                                    id="rePassword"
                                    name="rePassword"
                                    value={values.rePassword}
                                    onChange={changeHandler}
                                />

                                {error && (
                                    <p className="field text-sm text-red-500">
                                        <span>{error}</span>
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                type="submit"
                                onClick={submitHandler}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
