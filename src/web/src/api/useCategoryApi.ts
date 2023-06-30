import axios from "axios";
import { CategoryModel } from "../shared/Models/Category.model";

const BASE_URL = "https://localhost:7168/api/"
const CATEGORY_URL = BASE_URL + "Category/";

export async function GetCategories() {
    return axios.get<CategoryModel[]>(CATEGORY_URL).then(response => response.data);
}

export async function GetCategoryById(id: string) {
    return axios.get<CategoryModel>(CATEGORY_URL + "id", {params: {id}}).then(response => response.data);
}