import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../interfaces/User";

const BASE_URL = "https://localhost:44378/api/Auth";

const registerUser = (user: User) => {
    return axios.post(BASE_URL + '/register', user);
}

export const useAuthApi = () => {
    return useMutation(registerUser, {
        onSuccess: data => {
            console.log(data);
        },
        onError: (response) => {
            debugger;
            console.error(response);
        }
    });
}