// import { Button } from "@headlessui/react"

import { useEffect, useState } from "react"
import CarItem from "../car-item/CarItem";

// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//   ]

const BASE_URL = "http://localhost:3030/jsonstore/cars"

  
export default function CarList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
		(async function getCars() {
			const response = await fetch(BASE_URL);
			const result = await response.json();
			const cars = Object.values(result)
			setCars(cars)
			console.log(cars)
      	})();
    },[]);

  return (
    <div className="isolate">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="flex text-2xl font-bold tracking-tight text-gray-900">Latest adds</h2>
		<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{cars.map(car => 
				<CarItem 
					key={car._id}
					car={car}
				/>
			)}
		</div>
      </div>
    </div>
  )
}
  