import axios, { AxiosError } from "axios";
import { getUserToken } from "../auth/useAuth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Leader } from "../pages/WizardPage/Interfaces/Leader";

const BASE_URL = "https://localhost:7168/api/"

const COLPORTEUR_URL = BASE_URL + "Colporteur/"

const saveLeader = (leader: Leader, userId: string | null) => {
    return axios.post(COLPORTEUR_URL + "leader", leader, {
        headers: {'X-User-Id': userId}
    })
}

export function useSaveLeaderApi() {
    const [error, setError] = useState("");
    const [isLeaderSaved, setIsLeaderSaved] = useState(false);

    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;

    const { mutate, isLoading } = useMutation((leader: Leader) => saveLeader(leader, userId), {
        onSuccess: data => {
            debugger;
            setIsLeaderSaved(true);
        },
        onError: (response: AxiosError) => {
            console.log(response);
        }
    })

    return {
        saveLeader: mutate,
        isLoading,
        error,
        isLeaderSaved,
        setIsLeaderSaved
    }
}