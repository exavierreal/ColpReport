import { Dispatch, SetStateAction } from "react";
import { Category } from "./Category";

export interface CategoryModalProps {
    onClose: () => void;
    categories: Category[];
    selectedCategories: Category[];
    setSelectedCategories: Dispatch<SetStateAction<Category[]>>;
}