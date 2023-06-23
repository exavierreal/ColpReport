import axios from "axios";
import { Category } from "../Interfaces/Category";

const BASE_URL = "https://localhost:7168/api/"
const CATEGORY_URL = BASE_URL + "Category/";

export async function GetCategories() {
    return axios.get<Category[]>(CATEGORY_URL).then(response => response.data);
}