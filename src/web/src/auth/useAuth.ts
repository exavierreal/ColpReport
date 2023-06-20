import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserToken } from "../interfaces/UserToken";


export function getAuthToken(): string | null {
    return localStorage.getItem('authToken') ?? null;
}

export function setAuthToken(authToken: string) {
    localStorage.setItem('authToken', authToken)
}

export function clearAuthToken(): void {
    localStorage.removeItem('authToken');
}

export function getUserToken(): UserToken | null {
    const storedUserTokens = localStorage.getItem('userToken');
    return storedUserTokens ? JSON.parse(storedUserTokens) : null;
}

export function setUserToken(token: string[]) {
    const stringfiedTokens = JSON.stringify(token);
    localStorage.setItem('userToken', stringfiedTokens);
}

export function clearUserToken() {
    localStorage.removeItem('userToken');
}