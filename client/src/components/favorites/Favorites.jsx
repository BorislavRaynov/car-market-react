
import { useAuthContext } from "../../contexts/AuthContext";

import FavoriteItem from "./favorite-item/FavoriteItem";
import { useGetAllFavorites } from "../../hooks/useFavorite";

export default function Favotites() {
	const { email } = useAuthContext();
	const [ favorites, setFavourite ] = useGetAllFavorites(email)

	return (
		<ul role="list" className="divide-y divide-gray-100 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
			{favorites.map(favorite => <FavoriteItem key={favorite._id} {...favorite} />)}
		</ul>
	)
}
