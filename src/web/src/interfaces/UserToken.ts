import { Claim } from "./Claim";
import { Role } from "./Role";

export interface UserToken {
    id: string;
    email: string;
    Claims: Claim[];
    Roles: Role[];
}