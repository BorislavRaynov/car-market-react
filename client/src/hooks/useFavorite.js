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

export function useCheckFavoriteStatus(email, car, isAuthenticated) {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		(async () => {
			if (isAuthenticated) {
				const favoritesList = await favoriteAPI.getByEmail(email);
				const result = favoritesList.filter(fav => fav.car._id === car._id);
				setIsFavorite(result.length > 0);
			}
		})();
	}, [email, car, isAuthenticated])

	return [isFavorite, setIsFavorite]
}

export const useFavoriteCreateHandler = async (data) => {
	const result = await favoriteAPI.createFav(data);

	return result;
};

export const useFavoriteRemoveHandler = async (favId) => {
	const result = await favoriteAPI.removeFav(favId);

	return result;
};