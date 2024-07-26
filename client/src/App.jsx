import { Routes, Route } from 'react-router-dom'

import CarAdCreate from "./components/car-ad-create/CarAdCreate.jsx"
import CarDetails from "./components/car-details/CarDetails.jsx"
import CarList from "./components/car-list/CarList.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx"
import Register from "./components/register/Register.jsx"
import About from './components/about/About.jsx'
import Favorites from './components/favorites/Favorites.jsx'


function App() {
  return (
    <>
    	<div className="bg-white">
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='/register' element={<Register />} />
				<Route path='/cars' element={<CarList />} />
				<Route path='/cars/create' element={<CarAdCreate />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/about' element={<About />} />
				<Route path='/details' element={<CarDetails />} />
			</Routes>
		</div>
      
    </>
  )
}

export default App
