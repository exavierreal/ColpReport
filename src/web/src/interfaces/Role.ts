import { Claim } from "./Claim";

export interface Role {
    name: string;
    claims: Claim[];
}