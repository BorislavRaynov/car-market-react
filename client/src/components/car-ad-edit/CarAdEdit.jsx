import { Link, useNavigate, useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useGetCar } from "../../hooks/useCar";

import carAPI from "../../api/car-api";

export default function CarAdEdit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car] = useGetCar(carId);

    const { values,
        changeHandler,
        submitHandler,
        inputRef, } = useForm(car, async (values) => {
            await carAPI.update(carId, values);

            navigate(`/cars/${carId}/details`);
        });

    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8'>
            <form onSubmit={submitHandler}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Edit vehicle details</h2>

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="make" className="block text-sm font-medium leading-6 text-gray-900">
                                    Make
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="make"
                                            name="make"
                                            type="text"
                                            ref={inputRef}
                                            placeholder="Mercedes"
                                            value={values.make}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">
                                    Model
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="model"
                                            name="model"
                                            type="text"
                                            placeholder="G500 AMG"
                                            value={values.model}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="Mileage" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mileage
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="mileage"
                                            name="mileage"
                                            type="text"
                                            placeholder="150000 km"
                                            value={values.mileage}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                                    Color
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="color"
                                            name="color"
                                            type="text"
                                            placeholder="Silver"
                                            value={values.color}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-4">
                                <label htmlFor="fueltype" className="block text-sm font-medium leading-6 text-gray-900">
                                    Fuel Type
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="fueltype"
                                            name="fueltype"
                                            type="text"
                                            placeholder="Petrol"
                                            value={values.fueltype}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="price"
                                            name="price"
                                            type="text"
                                            placeholder="50000$"
                                            value={values.price}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="sellname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller's Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="sellname"
                                            name="sellname"
                                            type="text"
                                            placeholder="Ivan Ivanov"
                                            value={values.sellname}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="sellphone" className="block text-sm font-medium leading-6 text-gray-900">
                                    Seller's Phone
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="sellphone"
                                            name="sellphone"
                                            type="text"
                                            placeholder="+359878000111"
                                            value={values.sellphone}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-10 flex gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-4">
                                <label htmlFor="Img1" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image URL
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="img1"
                                            name="img1"
                                            type="text"
                                            value={values.img1}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="Img2" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image URL
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="img2"
                                            name="img2"
                                            type="text"
                                            value={values.img2}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="Img3" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image URL
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="img3"
                                            name="img3"
                                            type="text"
                                            value={values.img3}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="Img4" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image URL
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            id="img4"
                                            name="img4"
                                            type="text"
                                            value={values.img4}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-span-full">
                            <label htmlFor="info" className="mt-10 block text-sm font-medium leading-6 text-gray-900">
                                Additional information
                            </label>
                            <div className="mt-2">
                                <textarea
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="info"
                                    name="info"
                                    rows={3}
                                    value={values.info}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link
                        to={`/cars/${carId}/details`}
                        className="text-sm font-semibold leading-6 text-gray-900"
                        type="button"
                    >
                        Cancel
                    </Link>
                    <button
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                        onClick={submitHandler}
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    )
}