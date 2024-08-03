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
    const [car, setCar] = useState({
		make: '',
		model: '',
		mileage: '',
		color: '',
		fueltype: '',
		price: '',
		sellname: '',
		sellphone: '',
		img1: '',
		img2: '',
		img3: '',
		img4: '',
		info: '',
	});

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

export function useDeleteCarAd() {
	const carDeleteAdHandler = async (carId) => {
		try {
            await carAPI.remove(carId);
        }
        catch (err) {
            console.log(err.message);
        }
	}

	return carDeleteAdHandler;
}