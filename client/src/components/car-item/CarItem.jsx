import CarImg from "./car-img/CarImg";


export default function CarItem({
    car,
}) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={car.imgURLS[0]}
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        {/* <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            `${car.make} ${car.model}`
                        </a> */}
                        <p>{`${car.make} ${car.model}`}</p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{car.fueltype}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{car.mileage}</p>
                <button>
                    <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}