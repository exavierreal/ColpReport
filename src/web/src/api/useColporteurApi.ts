import axios, { AxiosError } from "axios"
import { ColporteurModel } from "../shared/Models/Colporteur.model.ts"
import { useState } from "react"
import { getUserToken } from "../auth/useAuth.js"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const BASE_URL = "https://localhost:7168/api/"
const COLPORTEUR_URL = BASE_URL + "Colporteur/"

const saveColporteur = (colporteur: ColporteurModel, userId: string | null) => {
    return axios.post(COLPORTEUR_URL, colporteur, {
        headers: {'X-User-Id': userId}
    })
}

export const getColporteurs = (userId: string | null) => {
    return axios.get<ColporteurModel[]>(COLPORTEUR_URL, { params: { userId } }).then(response => response.data);
}

export function useSaveColporteurApi() {
    const navigate = useNavigate();
    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;
    
    const [error, setError] = useState("");
    const [isColporteurSaved, setIsColporteurSaved] = useState(false);

    const { mutate, isLoading } = useMutation((colporteur: ColporteurModel) => saveColporteur(colporteur, userId), {
        onSuccess: response => {
            debugger;
            navigate('/colporteurs');
        },
        onError: (response: AxiosError) => {
            console.log(response);
        }
    })

    return {
        saveColporteur: mutate,
        isLoading,
        error,
        isColporteurSaved
    }
}