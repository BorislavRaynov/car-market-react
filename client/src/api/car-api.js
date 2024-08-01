import * as request from "../api/requester";

const BASE_URL = "http://localhost:3030/data/cars";

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const cars = Object.values(result);

    return cars
};

const getOne = (carId) => request.get(`${BASE_URL}/${carId}`);

const create=  (carData) => request.post(`${BASE_URL}`, carData)

const carAPI = {
    getAll,
    getOne,
    create,
};

export default carAPI;