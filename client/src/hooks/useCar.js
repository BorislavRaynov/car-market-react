import { useEffect, useState } from "react";

import carAPI from "../api/car-api";

export function useGetAllCars() {
    const [cars, setCars] = useState([])

	useEffect(() => {
		(async () =>{
			const result = await carAPI.getAll();

			setCars(result);
		})();
	}, []);

    return [cars, setCars]
}

export function useGetCar(carId) {
    const [car, setCar] = useState({});

    useEffect(() => {
		(async () => {
			const result = await carAPI.getOne(carId);
			setCar(result);
		})();
	}, [carId]);

    return [car, setCar]
}

export function useCreateCarAd() {
	const carCreateAdHandler = (carData) => carAPI.create(carData);

	return carCreateAdHandler;
}