import { useEffect, useState } from "react";
import favoriteAPI from "../api/favorite-api";

export function useGetFavsByEmail(email) {
	const [favsByEmail, setFavsByEmail] = useState([])

	useEffect(() => {
		(async () => {
			try {
				const result = await favoriteAPI.getByEmail(email);

				setFavsByEmail(result);
			} catch (err) {
				console.log(err.message)
			}
		})();
	}, []);

	return [favsByEmail, setFavsByEmail]
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