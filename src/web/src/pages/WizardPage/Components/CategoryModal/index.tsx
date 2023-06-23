import { Icon } from "@iconify-icon/react";
import { CategoriesContainer, CategoryBox, CategoryName, CategorySelected, Container, HeadImage, Heading, Modal, Overlay, SaveButton, Subheading, Title } from "./styles";
import { CategoryModalProps } from "../../Interfaces/CategoryModalProps";
import { Category } from "../../Interfaces/Category";

export function CategoryModal({ categories, selectedCategories, setSelectedCategories, onClose: handleSave }: CategoryModalProps) {
    function handleChange(category: Category) {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.some((cat) => cat.id === category.id))
                return prevSelectedCategories.filter((cat) => cat.id !== category.id);
            else
                return [...prevSelectedCategories, category];
        });
    }
    
    return (
        <Overlay>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Container>
                    <HeadImage src="/assets/akar-icons_reciept.svg" />
                    <Heading>
                        <Title>Categorias</Title>
                        <Subheading>Quais categorias você se encaixa?</Subheading>
                    </Heading>

                    <CategoriesContainer>
                        {categories.map((category) => (
                            <CategoryBox key={category.id}>
                                <CategoryName>{ category.name }</CategoryName>
                                <CategorySelected
                                    type="checkbox"
                                    checked={ selectedCategories.some(
                                        (selectedCategory) => selectedCategory.id === category.id
                                    )}
                                    onChange={() => handleChange(category)} />
                            </CategoryBox>
                        ))}
                    </CategoriesContainer>

                    <SaveButton onClick={handleSave}>
                        <Icon icon="akar-icons:double-check" width="20" />
                        <p>Salvar</p>
                    </SaveButton>
                </Container>
            </Modal>
        </Overlay>
    );
}