import axios from "axios";
import { UnionSuggestions } from "../Interfaces/UnionSuggestions";
import { AssociationSuggestion } from "../Interfaces/AssociationSuggestion";

const BASE_URL = "https://localhost:7170/api/";
const UNION_URL = BASE_URL + "Union/";
const ASSOCIATION_URL = BASE_URL + "Association/";

export async function getUnionSuggestions(filter: string) {
    return await axios.get<UnionSuggestions[]>(UNION_URL + 'get-union-suggestions', { params: {filter} }).then(response => response.data);
}

export async function getAssociationSuggestion(filter: string, unionId: string) {
    return await axios.get<AssociationSuggestion[]>(ASSOCIATION_URL + 'get-association-suggestions', { params: {filter, unionId} }).then(response => response.data);
}