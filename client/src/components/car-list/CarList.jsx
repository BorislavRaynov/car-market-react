import { useGetAllCars } from "../../hooks/useCar";
import CarItem from "../car-item/CarItem";

export default function CarList() {
	const [cars] = useGetAllCars();

	return (
		<div className="isolate">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="flex text-2xl font-bold tracking-tight text-gray-900">Latest adds</h2>
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{/* // TODO implement spinner */}
					{cars.length > 0
						? cars.map(car => <CarItem key={car._id} car={car} />)
						: <h3 className="flex text-3xl font-bold tracking-tight text-gray-900">No Car Adds Yet!!!</h3>
					}
				</div>
			</div>
		</div>
	);
};
