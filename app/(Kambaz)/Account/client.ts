import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

interface SigninCredentials {
    email: string;
    password: string;
}

interface SigninResponse {
    token: string;
    user: {
        _id: string;
        name: string;
        email: string;
    };
}

export const signin = async (credentials: SigninCredentials): Promise<SigninResponse | any> => {
    try {
        const response = await axios.post<SigninResponse>(`${USERS_API}/signin`, credentials);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return error.response.data;
            }
        }
    }
};
interface SignupUser {
    username?: string;
    password?: string;
}

export const signup = async (user: SignupUser) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
};
interface UpdateUser {
    _id: string;
    name?: string;
    email?: string;
    password?: string;
}

export const updateUser = async (user: UpdateUser) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const profile = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
};
export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};
