import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { UnionSuggestions } from "../Interfaces/UnionSuggestions";

const BASE_URL = "https://localhost:7170/api/";
const UNION_URL = BASE_URL + "Union/";
const ASSOCIATION_URL = BASE_URL + "Association/";

export async function getUnionSuggestions(filter: string) {
    return await axios.get<UnionSuggestions[]>(UNION_URL + 'get-union-suggestions', { params: filter }).then(response => response.data);
}