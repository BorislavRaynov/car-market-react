import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'


const navigation = [
    { name: 'CarList', to: '/cars' },
    { name: 'Create Ad', to: '/cars/create' },
    { name: 'Favorites', to: '/favorites' },
    { name: 'About', to: '/about' },
]

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <img
                            alt=""
                            src="https://static.thenounproject.com/png/3574480-200.png"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isAuthenticated
                        ? (
                            <Link to="/logout" className="text-sm font-semibold leading-6 text-gray-900">
                                Log out <span aria-hidden="true">&rarr;</span>
                            </Link>
                        )
                        : (
                            <>
                                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </Link>
                                <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900">
                                    Register <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </>
                        )
                    }


                </div>
            </nav>
        </header>
    );
}