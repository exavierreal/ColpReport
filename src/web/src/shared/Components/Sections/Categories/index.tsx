import { Dispatch, SetStateAction, MouseEvent, useState, useEffect, FormEvent } from "react";
import { CategoryModel } from "../../../Models/Category.model";
import { Subtitle } from "../../Titles/Subtitle";
import { Container, SelectionBox, SelectionBoxes } from "./styles";
import { GetCategories } from "../../../../api/useCategoryApi";
import { CategoryModal } from "../../Modals/CategoryModal";

interface CategoriesProps {
    selectedCategories: CategoryModel[];
    setSelectedCategories: Dispatch<SetStateAction<CategoryModel[]>>;
}

export function Categories({ selectedCategories, setSelectedCategories }: CategoriesProps) {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [categoriesDisplayed, setCategoriesDisplayed] = useState<CategoryModel[]>([]);

    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
    
    useEffect(() => {
        const getCategories = async () => {
            const data = await GetCategories();
            setCategories(data);
        }

        getCategories();
    }, []);

    useEffect(() => {
        setCategoriesDisplayed(categories.slice(0, 3));
    }, [categories, selectedCategories]);

    function handleCategorySelect (category: CategoryModel, event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        selectedCategories.includes(category)
            ? setSelectedCategories(selectedCategories.filter((cat) => cat !== category))
            : setSelectedCategories([...selectedCategories, category])
    }

    function handleToggleCategoryModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsCategoriesModalOpen(!isCategoriesModalOpen);
    }

    return (
        <Container>
            <Subtitle title="Categoria(s)" />

            <SelectionBoxes>
                {categoriesDisplayed?.map((category) => (
                    <SelectionBox
                        key={category.id}
                        selected={selectedCategories.some(c => c.id === category.id)}
                        onClick={(e) => handleCategorySelect(category, e)}>
                            { category.name }
                    </SelectionBox>
                ))}

                <SelectionBox
                    selected={selectedCategories.some((category) => category.sequential > 2)}
                    onClick={handleToggleCategoryModal}>Outros</SelectionBox>
            </SelectionBoxes>

            { isCategoriesModalOpen && <CategoryModal categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} onClose={handleToggleCategoryModal} /> }
        </Container>
    )
}