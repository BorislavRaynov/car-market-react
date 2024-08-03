import { useAuthContext } from "../../contexts/AuthContext";
import { useGetFavsByEmail } from "../../hooks/useFavorite.js";

import FavoriteItem from "./favorite-item/FavoriteItem";

export default function Favotites() {

	const { email } = useAuthContext();
	const [favsByEmail] = useGetFavsByEmail(email)

	return (
			<ul role="list" className="divide-y divide-gray-100 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
				{favsByEmail.length > 0
					? favsByEmail.map(favorite => <FavoriteItem key={favorite._id} {...favorite} />)
					: <h3 className="flex text-3xl font-bold tracking-tight text-gray-900">You do not have favorite cars yet!!!</h3>
				}
			</ul>
	);
};
