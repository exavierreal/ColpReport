import { Dispatch, SetStateAction } from "react";

export interface ParamsProps {
    movementSelected?: number | null;
    movementTypeSelected?: number | null;
    setMovementSelected?: Dispatch<SetStateAction<number | null>>;
    setMovementTypeSelected?: Dispatch<SetStateAction<number | null>>;
    setFormMovementSelected?: Dispatch<SetStateAction<number | null>>;
}