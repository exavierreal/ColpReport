import axios, { AxiosError } from "axios";
import { UnionSuggestions } from "../Interfaces/UnionSuggestions";
import { AssociationSuggestion } from "../Interfaces/AssociationSuggestion";
import { useMutation } from "@tanstack/react-query";
import { Team } from "../Interfaces/Team";
import { useState } from "react";

const BASE_URL = "https://localhost:7170/api/";
const UNION_URL = BASE_URL + "Union/";
const ASSOCIATION_URL = BASE_URL + "Association/";

const saveTeam = (team: Team) => {
    debugger;
    return axios.post(BASE_URL + 'Team/save-team', team);
}

export async function getUnionSuggestions(filter: string) {
    return await axios.get<UnionSuggestions[]>(UNION_URL + 'get-union-suggestions', { params: {filter} }).then(response => response.data);
}

export async function getAssociationSuggestion(filter: string, unionId: string) {
    return await axios.get<AssociationSuggestion[]>(ASSOCIATION_URL + 'get-association-suggestions', { params: {filter, unionId} }).then(response => response.data);
}

export function useSaveTeamApi () {
    const [error, setError] = useState("");
    const [isTeamSaved, setIsTeamSaved] = useState(false);

    const { mutate, isLoading } = useMutation(saveTeam, {
        onSuccess: data => {
            setIsTeamSaved(true);
        },
        onError: (response: AxiosError) => {
            console.log(response);
        }
    })

    return {
        saveTeam: mutate,
        isLoading,
        error,
        isTeamSaved
    }
}