import { useEffect, useState } from "react";
import favoriteAPI from "../api/favorite-api";

// export function useGetAllFavorites() {
// 	const [favorites, setFavorites] = useState([])

// 	useEffect(() => {
// 		(async () => {
// 			const result = await favoriteAPI.getAllFavoites();

// 			setFavorites(result);
// 		})();
// 	}, [favorites]);

// 	console.log(favorites)
// 	return [favorites, setFavorites]
// };

export function useGetFavsByEmail(email) {
	const [favsByEmail, setFavsByEmail] = useState([])

	useEffect(() => {
		(async () => {
			const result = await favoriteAPI.getByEmail(email);

			setFavsByEmail(result);

		})();
	}, []);

	return [favsByEmail, setFavsByEmail]
};

// export function useCheckCarInFavorites(email, carId) {
// 	const [userFavorites] = useGetFavsByEmail(email);

// 	const favList = userFavorites.filter(fav => fav.car._id === carId);

// 	if(favList.length > 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }