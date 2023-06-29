import { Dispatch, SetStateAction } from "react";
import { Colporteur } from "../Models/Colporteur";

export interface ColpParamsProps {
    colporteur: Colporteur;
    setColporteur: Dispatch<SetStateAction<Colporteur>>;
}