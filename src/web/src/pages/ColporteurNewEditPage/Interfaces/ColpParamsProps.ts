import { Dispatch, SetStateAction } from "react";
import { ColporteurModel } from "../../../shared/Models/Colporteur.model.ts";


export interface ColpParamsProps {
    colporteur: ColporteurModel;
    setColporteur: Dispatch<SetStateAction<ColporteurModel>>;
    emptyInputs?: string[];
    setEmptyInputs?: Dispatch<SetStateAction<string[]>>;
}