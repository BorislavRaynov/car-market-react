import { useEffect, useState } from "react";

import carAPI from "../api/car-api";

export function useGetAllCars() {
    const [cars, setCars] = useState([]);
	const [isLoading, setIsLoading] = useState(true) 

	useEffect(() => {
		(async () =>{
			const result = await carAPI.getAll();
			setIsLoading(false)

			setCars(result);
		})();
	}, []);

    return [cars, setCars, isLoading, setIsLoading];
}

export function useGetCar(carId) {
	const [isLoading, setIsLoading] = useState(true)
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
			setIsLoading(false)
			setCar(result);
		})();
	}, [carId]);

    return [car, setCar, isLoading, setIsLoading];
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