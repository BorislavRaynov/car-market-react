import { useEffect, useRef, useState } from "react"

const initialUserFormValues = {
	email: '',
	password: '',
}

export default function Login() {
    const [userFormValues, setUserFormValues] = useState(initialUserFormValues)

    const formUserSubmitHandler = (e) => {
        e.preventDefault()
        console.log("User login form submitted")
        console.log(userFormValues)
    }

    const changeHandler = (e) => {
        setUserFormValues(userFormValues => ({...userFormValues, [e.target.name]: e.target.value}))
    }

    
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus()
	},[])

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={formUserSubmitHandler}>
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
                                    autoComplete="email"
                                    ref={inputRef}
                                    value={userFormValues.email}
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
                                    autoComplete="current-password"
                                    value={userFormValues.password}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                type="submit"
                                onClick={formUserSubmitHandler}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
