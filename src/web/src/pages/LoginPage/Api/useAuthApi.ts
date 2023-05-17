import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { User } from "../interfaces/User";
import { UserLogin } from "../interfaces/UserLogin";

const BASE_URL = "https://localhost:7169/api/Auth";

const registerUser = (user: User) => {
    return axios.post(BASE_URL + '/register', user);
}

const login = (userLogin: UserLogin) => {
    return axios.post(BASE_URL + '/login', userLogin)
}

export const useRegisterApi = () => {
    return useMutation(registerUser, {
        onSuccess: data => {
            console.log(data);
        },
        onError: (response) => {
            console.log(response)
        }
    });
}

export const useLoginApi = () => {
    const [error, setError] = useState("");

    const { mutate, isLoading } = useMutation(login, {
        onSuccess: data => {
            
        },
        onError: (response: AxiosError) => {
            if (response.response?.data?.errors?.Messages)
                setError(response.response?.data?.errors?.Messages[0]);

            if (response.response?.data?.errors?.Password)
                setError(response.response?.data?.errors?.Password[0]);
        }
    })
       
    return {
        login: mutate,
        isLoading,
        error
    }
}