import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext.js';

import CarAdCreate from "./components/car-ad-create/CarAdCreate.jsx";
import CarDetails from "./components/car-details/CarDetails.jsx";
import CarList from "./components/car-list/CarList.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";
import About from './components/about/About.jsx';
import Favorites from './components/favorites/Favorites.jsx';


function App() {
	const [authState, setAuthState] = useState({});

	const changeAuthState = (state) => {
		// TODO: impl persisted authstate
		localStorage.setItem('accessToken', state.accessToken)
		setAuthState(state);
	}
		



	const contextData = {
		userId: authState._id,
		email: authState.email,
		accessToken: authState.accessToken,
		isAuthenticated: !!authState.email,
		changeAuthState,
	};

	return (
		<AuthContext.Provider value={contextData}>
			<div className="bg-white">
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='/register' element={<Register />} />
					<Route path='/cars' element={<CarList />} />
					<Route path='/cars/:carId/details' element={<CarDetails />} />
					<Route path='/cars/create' element={<CarAdCreate />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</div>
		</AuthContext.Provider>
	)
}

export default App
