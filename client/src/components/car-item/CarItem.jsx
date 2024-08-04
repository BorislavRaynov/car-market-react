import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useGetFavsByEmail } from "../../hooks/useFavorite";

import favoriteAPI from "../../api/favorite-api";

export default function CarItem({
    car,
}) {
    const { isAuthenticated, email } = useAuthContext();
    const [favsByEmail, setFavsByEmail] = useGetFavsByEmail(email);

    const favData = {
        email: email,
        car: car,
    }

    const favouriteClickHandler = async (e) => {
        e.preventDefault();

        const carIsInFavorites = favsByEmail.filter(fav => fav.car._id === car._id);

        if (carIsInFavorites.length === 0) {
            const result = await favoriteAPI.createFav(favData);
            setFavsByEmail(favsByEmail => ([...favsByEmail, result]))
        } else {
            alert('This ad is laready in your favorites!!');
        }   
    }

    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/cars/${car._id}/details`}>
                    <span aria-hidden="true" className="inset-0" />
                    <img
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        src={car.img1}
                    />
                </Link>
            </div>
            <div className="mt-4 flex justify-between">
                <div className="grid">
                    <h3 className="text-sm text-gray-700">
                        <p>{car.make}</p>
                        <p>{car.model}</p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{car.fueltype}</p>
                </div>

                <p className="text-sm font-medium text-gray-900">{car.price} $</p>

                {isAuthenticated &&
                    <button onClick={favouriteClickHandler}>
                        <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                }

            </div>
        </div>
    )
}