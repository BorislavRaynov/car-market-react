import { useEffect, useState } from "react";
import favoriteAPI from "../api/favorite-api.js";

export function useGetFavsByEmail(email) {
	const [favsByEmail, setFavsByEmail] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		(async () => {
			try {
				const result = await favoriteAPI.getByEmail(email);

				setFavsByEmail(result);
			} catch (err) {
				console.log(err.message)
			} finally {
				setIsLoading(false)
			}
		})();
	}, [email]);

	return [favsByEmail, setFavsByEmail, isLoading, setIsLoading]
};

export const useCheckCarIsInFavs = async (email, car) => {
	try {
		const favoritesList = await favoriteAPI.getByEmail(email);
		const result = favoritesList.filter(fav => fav.car._id === car._id);
		return result.length > 0;
	} catch (err) {
		console.log(err)
		return false;
	}
};

export const useFavoriteCreateHandler = async (data) => {
	const result = await favoriteAPI.createFav(data);

	return result;
};