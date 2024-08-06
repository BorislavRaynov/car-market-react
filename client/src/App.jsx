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
			<div className="bg-white relative isolate px-6 pt-14 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
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
					<Route path='*' element={<Page404 />} />
				</Routes>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</AuthContextProvider>

	);
};

export default App;
