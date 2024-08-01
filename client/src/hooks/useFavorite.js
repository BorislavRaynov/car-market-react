import { useEffect, useState } from "react";
import favoriteAPI from "../api/favorite-api";


export function useGetAllFavorites(email) {
    const [favorites, setFavorites] = useState([])

	useEffect(() => {
		(async () =>{
			const result = await favoriteAPI.getAllByEmail(email);

			setFavorites(result);
		})();
	}, [favorites]);

    return [favorites, setFavorites]
};