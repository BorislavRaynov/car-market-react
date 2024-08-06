import { useGetAllCars } from "../../hooks/useCar";

import CarItem from "../car-item/CarItem";
import Spinner from "../spinner/Spinner";

export default function CarList() {
	const [cars, setCars, isLoading, setIsloading] = useGetAllCars();

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
			{isLoading
				? <Spinner />
				: <>
					<h2 className="flex text-2xl justify-center font-bold tracking-tight text-gray-900">Latest Adds</h2>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{cars.length > 0
							? cars.map(car => <CarItem key={car._id} car={car} />)
							: <h3 className="flex text-3xl font-bold tracking-tight text-gray-900">No Car Adds Yet!!!</h3>
						}
					</div>
				</>
			}
		</div>
	);
};
