import axios, { AxiosError } from "axios";
import { UnionSuggestion } from "../Interfaces/UnionSuggestions";
import { AssociationSuggestion } from "../Interfaces/AssociationSuggestion";
import { useMutation } from "@tanstack/react-query";
import { Team } from "../Interfaces/Team";
import { useState } from "react";
import { getUserToken } from "../../../auth/useAuth";

const BASE_URL = "https://localhost:7170/api/";
const TEAM_URL = BASE_URL + "Team/";
const UNION_URL = BASE_URL + "Union/";
const ASSOCIATION_URL = BASE_URL + "Association/";

const saveTeam = (team: Team, userId: string | null) => {
    return axios.post(TEAM_URL + 'save-team', team, {
        headers: { 'X-User-Id': userId }
    });
}

export async function getUnionSuggestions(filter: string) {
    return await axios.get<UnionSuggestion[]>(UNION_URL + 'get-union-suggestions', { params: {filter} }).then(response => response.data);
}

export async function getUnionById<UnionSuggestion>(unionId: string) {
    return await axios.get<UnionSuggestion>(UNION_URL + 'get-union-by-id', { params: {unionId} }).then(response => response.data);
}

export async function getAssociationSuggestion(filter: string, unionId: string) {
    return await axios.get<AssociationSuggestion[]>(ASSOCIATION_URL + 'get-association-suggestions', { params: {filter, unionId} }).then(response => response.data);
}

export async function getAssociationById<Association>(associationId: string) {
    return await axios.get<Association>(ASSOCIATION_URL + 'get-association-by-id', { params: {associationId} }).then(response => response.data);
}

export async function getSaveTeam(userId: string | null) {
    return await axios.get<Team>(TEAM_URL + 'get-team-by-userid', { params: {userId} }).then(response => response.data);
}

export function useSaveTeamApi () {
    const [error, setError] = useState("");
    const [isTeamSaved, setIsTeamSaved] = useState(false);

    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;

    const { mutate, isLoading } = useMutation((team: Team) => saveTeam(team, userId), {
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
        isTeamSaved,
        setIsTeamSaved
    }
}