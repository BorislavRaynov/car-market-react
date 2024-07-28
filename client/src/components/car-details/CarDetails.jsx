import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import carAPI from '../../api/car-api';
import CarImgs from '../car-item/car-imgs/CarImgs';

export default function CarDetails() {
	const [car, setCar] = useState({});
	const { carId } = useParams();

	useEffect(() => {
		(async () => {
			const result = await carAPI.getOne(carId);
			setCar(result);
		})();
	}, []);

	return (
		<div className="pt-20">
			{/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
				<div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
					<img
						alt="main-pic"
						src={car.imgURLS[0]}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
					<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
						<img
							alt="second-pic"
							src={car.imgURLS[1]}
							className="h-full w-full object-cover object-center"
						/>
					</div>
					<div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
						<img
							alt="third-pic"
							src={car.imgURLS[2]}
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				<div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
					<img
						alt="forth-pic"
						src={car.imgURLS[3]}
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div> */}
			<CarImgs urls={car.imgURLS} />

			<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
				<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
					<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{car.make} {car.model}</h1>
				</div>

				<div className="mt-4 lg:row-span-3 lg:mt-0">
					<h2 className="sr-only">Product information</h2>
					<p className="text-3xl tracking-tight text-gray-900">Price: {car.price} $</p>

					<button
						type="submit"
						className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Edit
					</button>
					<button
						type="submit"
						className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
					>
						Delete
					</button>
				</div>

				<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
					<div className="flex space-x-4 ">
						<div className="mt-10">
							<h3 className="text-xl font-medium text-gray-900">Seller's Details</h3>

							<div className="mt-4 text-lg">
								<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
									<li className="text-gray-400">
										<span className="text-gray-600">Name: {car.sellname}</span>
									</li>
									<li className="text-gray-400">
										<span className="text-gray-600">Contact: {car.sellphone}</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-xl font-medium text-gray-900">Highlights</h3>

							<div className="mt-4 text-lg">
								<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
									<li className="text-gray-400">
										<span className="text-gray-600">Mileage: {car.mileage} km</span>
									</li>
									<li className="text-gray-400">
										<span className="text-gray-600">Color: {car.color}</span>
									</li>
									<li className="text-gray-400">
										<span className="text-gray-600">Fuel Type: {car.fueltype}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mt-10">
						<h2 className="text-xl font-medium text-gray-900">Details</h2>

						<div className="mt-4 space-y-6">
							<p className="text-lg text-gray-600">{car.details}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
