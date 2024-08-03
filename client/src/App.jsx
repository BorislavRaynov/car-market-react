import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext.jsx';

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
import CarDelete from './components/car-delete/CarDelete.jsx';


function App() {

	return (
		<AuthContextProvider>
			<div className="bg-white">
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='/register' element={<Register />} />
					<Route path='/cars' element={<CarList />} />
					<Route path='/cars/:carId/details' element={<CarDetails />} />
					<Route path='/cars/:carId/delete' element={<CarDelete />} />
					<Route path='/cars/create' element={<CarAdCreate />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</div>
		</AuthContextProvider>

	);
};

export default App;
