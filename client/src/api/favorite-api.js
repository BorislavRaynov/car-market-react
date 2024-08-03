import * as request from "../api/requester";

const BASE_URL = "http://localhost:3030/data/favorites";

const getAllFavoites = async () => {
    const result = await request.get(BASE_URL);
    const favorites = Object.values(result);

    return favorites
};

const getByEmail = async (email) => {
    const result = await request.get(`${BASE_URL}?where=email%3D%22${email}%22`);
    const favorites = Object.values(result);

    return favorites
};

const removeFav = async (favId) => await request.del(`${BASE_URL}/${favId}`);

const createFav = async (favData) => await request.post(`${BASE_URL}`, favData);

const favoriteAPI = {
    getAllFavoites,
    getByEmail,  
    removeFav,
    createFav,
};

export default favoriteAPI;