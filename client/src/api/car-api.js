import * as request from "../api/requester";

const BASE_URL = "http://localhost:3030/data/cars";

const getAll = async () => {
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc`);
    const cars = Object.values(result);

    return cars;
};

const getOne = (carId) => request.get(`${BASE_URL}/${carId}`);

const create =  (carData) => request.post(`${BASE_URL}`, carData);

const remove = (carId) => request.del(`${BASE_URL}/${carId}`);

const carAPI = {
    getAll,
    getOne,
    create,
    remove,
};

export default carAPI;