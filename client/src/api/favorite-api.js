import * as request from "../api/requester";

const BASE_URL = "http://localhost:3030/data/favorites";

const getAllByEmail = async (email) => {
    const result = await request.get(`${BASE_URL}?where=email%3D%22${email}%22`);
    const favorites = Object.values(result);

    return favorites
};

const remove = (favId) => request.del(`${BASE_URL}/${favId}`);

const favoriteAPI = {
    getAllByEmail,  
    remove,
};

export default favoriteAPI;