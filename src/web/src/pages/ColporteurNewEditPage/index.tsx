
import { FormEvent, useEffect, useState } from "react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { GoalCard } from "./Components/GoalCard";
import { Buttons, Container, Content } from "./styles";
import { SinceDateCard } from "./Components/SinceDateCard";
import { PersonalInfoForm } from "./Components/PersonalInfoForm";
import { Categories } from "../../shared/Components/Sections/Categories";
import { CategoryModel } from "../../shared/Models/Category.model";
import { ActionButtons } from "../../shared/Components/Buttons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../shared/Components/Modals/CancelModal";
import { ColporteurModel } from "../../shared/Models/Colporteur.model.ts";
import { useSaveColporteurApi } from "../../api/useColporteurApi";

export function ColporteurNewEditPage() {
    const navigate = useNavigate();
    const { saveColporteur, isLoading, error, isColporteurSaved } = useSaveColporteurApi();

    const [colporteur, setColporteur] = useState<ColporteurModel>({goal: 0, sinceDate: new Date(), imageData: undefined, filename: undefined});
    const [selectedCategories, setSelectedCategories] = useState<CategoryModel[]>([]);
    const [emptyInputs, setEmptyInputs] = useState<string[]>([]);
    
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

    useEffect(() => {
        const uniqueCategoryIds = [...new Set(selectedCategories.map(category => category.id))]

        setColporteur((prevColp) => ({ ...prevColp, categoryIds: uniqueCategoryIds  }))
    }, [selectedCategories]);

    function validateColporteur() {
        let hasError = false;

        if (emptyInputs.includes("name") || emptyInputs.includes("lastname") || emptyInputs.includes("email"))
            hasError = true;

        return !hasError;
    }

    function handleBackClick() {
        setIsCancelModalOpen(!isCancelModalOpen);
    }

    function handleCancel (choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/colporteurs");
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        
        if (validateColporteur())
            saveColporteur(colporteur);
    }

    
    return (
        <Container>
            <HeaderBar handleClick={handleBackClick} title="Novo Colportor" leftIcon="back" />

            <Content onSubmit={handleSubmit}>
                <GoalCard colporteur={colporteur} setColporteur={setColporteur} />

                <SinceDateCard colporteur={colporteur} setColporteur={setColporteur} />
                
                <PersonalInfoForm colporteur={colporteur} setColporteur={setColporteur} emptyInputs={emptyInputs} setEmptyInputs={setEmptyInputs} />

                <Categories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <Buttons>
                    <ActionButtons onCancel={handleCancel} saveDisabled={isColporteurSaved} />
                </Buttons>
            </Content>  

            <Menu />

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>
    )
}