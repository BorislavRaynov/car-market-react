import { useAuthContext } from "../../contexts/AuthContext";
import { useGetFavsByEmail } from "../../hooks/useFavorite.js";
import { useFavoriteRemoveHandler } from "../../hooks/useFavorite.js";

import Spinner from "../spinner/Spinner.jsx";
import FavoriteItem from "./favorite-item/FavoriteItem";

export default function Favotites() {
	const { email } = useAuthContext();
	const [favsByEmail, setFavsByEmail, isLoading] = useGetFavsByEmail(email);

	const deleteFavorite = async (favoriteId) => {
		try {
			await useFavoriteRemoveHandler(favoriteId);
			setFavsByEmail(prevFavs => prevFavs.filter(fav => fav._id !== favoriteId));
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-3xl lg:px-8">
			<h2 className="mb-10 flex text-2xl justify-center font-bold tracking-tight text-gray-900">Your Favorites</h2>
			{isLoading
				? <Spinner />
				: <>
					<ul role="list" className="divide-y divide-gray-100 mx-auto max-w-2xl">
						{favsByEmail.length > 0
							? favsByEmail.map(favorite => <FavoriteItem key={favorite._id} deleteHandler={deleteFavorite} {...favorite} />)
							: <h3 className="flex justify-center text-3xl font-bold tracking-tight text-gray-900">You do not have favorite cars yet!!!</h3>
						}
					</ul>
				</>
			}
		</div>
	);
};
