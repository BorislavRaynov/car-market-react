import { useNavigate } from "react-router-dom";

import carAPI from "../../../api/car-api";

export default function FavoriteItem({
    deleteHandler,
    _id,
    car,
}) {
    const navigate = useNavigate();

    const detailsClickHandler = async (e) => {
        e.preventDefault();

        try {
            await carAPI.getOne(car._id);

            navigate(`/cars/${car._id}/details`);
        } catch (err) {
            alert("This car ad doesn't exist anymore. Please remove it from your favorites!!")
        }
    };

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img alt="" src={car.img1} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{car.make} {car.model}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{`${car.price} $`}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-row sm:items-end">
                <button
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    type="button"
                    onClick={detailsClickHandler}
                >
                    Details
                </button>
                <button
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    type="button"
                    onClick={() => deleteHandler(_id)}
                >
                    Remove
                </button>
            </div>
        </li>
    );
}