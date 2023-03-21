import { useState } from "react";
import { Circle, CircleLoading, LoadingOverlay } from "./styles";

export function Loading() {
    return (
        <LoadingOverlay>
            <Circle />
            <CircleLoading />
        </LoadingOverlay>
    );
}

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoading = () => setIsLoading(!isLoading);

    return {
        isLoading,
        handleLoading
    }
}