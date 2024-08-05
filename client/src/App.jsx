import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext.jsx';

import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import CarAdCreate from "./components/car-ad-create/CarAdCreate.jsx";
import CarDetails from "./components/car-details/CarDetails.jsx";
import CarList from "./components/car-list/CarList.jsx";
import CarAdEdit from './components/car-ad-edit/CarAdEdit.jsx';
import CarDelete from './components/car-delete/CarDelete.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import Login from "./components/login/Login.jsx";
import Logout from "./components/logout/Logout.jsx";
import Register from "./components/register/Register.jsx";
import About from './components/about/About.jsx';
import PrivateGuard from './components/common/PrivteGuard.jsx';
import Page404 from './components/page-404/Page404.jsx';

function App() {

	return (
		<AuthContextProvider>
			<div className="bg-white">
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/cars' element={<CarList />} />
					<Route path='/cars/:carId/details' element={<CarDetails />} />
					<Route path='/about' element={<About />} />
					<Route element={<PrivateGuard />}>
						<Route path='/cars/create' element={<CarAdCreate />} />
						<Route path='/cars/:carId/edit' element={<CarAdEdit />} />							
						<Route path='/cars/:carId/delete' element={<CarDelete />} />
						<Route path='/favorites' element={<Favorites />} />
						<Route path='/logout' element={<Logout />} />
					</Route>
					<Route path='*' element={<Page404 />}/>
				</Routes>
			</div>
		</AuthContextProvider>

	);
};

export default App;
