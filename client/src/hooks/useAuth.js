import { useAuthContext } from "../contexts/AuthContext";

import { login, logout, register } from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {

        const { password: _, ...authData } = await register(email, password);

        changeAuthState(authData);

        return authData;
    };

    return registerHandler;
};


export const useLogout = () => {
    const { logout: serverLogout } = useAuthContext();

    const logoutHandler = async () => {
        await logout();
        serverLogout();
    };

    return logoutHandler;
};