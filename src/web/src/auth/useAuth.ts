import { useQuery, useQueryClient } from "@tanstack/react-query";

export function getAuthToken(): string | null {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<string>(['authToken']) ?? null;
}

export function removeAuthToken(): void {
    const queryClient = useQueryClient();
    queryClient.removeQueries(['authToken'])
}

export function getUserRoles(): string[] | null {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<string[]>(['userRoles']) ?? null;
}