import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { UserLogin } from "../interfaces/UserLogin";
import { useNavigate } from "react-router-dom";
import { setAuthToken, setUserToken } from "../../../auth/useAuth";

const BASE_URL = "https://localhost:7169/api/Auth";

const registerUser = (user: User) => {
    return axios.post(BASE_URL + '/register', user);
}

const login = (userLogin: UserLogin) => {
    return axios.post(BASE_URL + '/login', userLogin)
}

export const useRegisterApi = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation(registerUser, {
        onSuccess: response => {
            setAuthToken(response.data?.accessToken);
            setUserToken(response.data?.userToken);

            navigate('/wizard');
        },
        onError: (response) => {
            console.log(response)
        }
    });

    return {
        register: mutate,
        isLoading
    }
}

export const useLoginApi = () => {
    const [error, setError] = useState("");
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation(login, {
        onSuccess: response => {
            setAuthToken(response.data?.accessToken);
            setUserToken(response.data?.userToken);

            navigate('/wizard');
        },
        onError: (response: AxiosError) => {
            console.log(response);

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