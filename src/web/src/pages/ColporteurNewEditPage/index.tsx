
import { FormEvent, useEffect, useState } from "react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { GoalCard } from "./Components/GoalCard";
import { Colporteur } from "./Models/Colporteur";
import { Buttons, Container, Content } from "./styles";
import { SinceDateCard } from "./Components/SinceDateCard";
import { PersonalInfoForm } from "./Components/PersonalInfoForm";
import { Categories } from "../../shared/Components/Sections/Categories";
import { CategoryModel } from "../../shared/Models/Category.model";
import { ActionButtons } from "../../shared/Components/Buttons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../shared/Components/Modals/CancelModal";

export function ColporteurNewEditPage() {
    const navigate = useNavigate();

    const [colporteur, setColporteur] = useState<Colporteur>({goal: 0, sinceDate: new Date(), imageData: undefined, imageFilename: undefined});
    const [selectedCategories, setSelectedCategories] = useState<CategoryModel[]>([]);

    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isColpSaved, setIsColpSaved] = useState(false);

    useEffect(() => {
        const uniqueCategoryIds = [...new Set(selectedCategories.map(category => category.id))]

        setColporteur((prevColp) => ({ ...prevColp, categoryds: uniqueCategoryIds  }))
    }, [selectedCategories]);

    function handleBackClick() {
        setIsCancelModalOpen(!isCancelModalOpen);
    }

    function handleCancel (choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/colporteurs");
    }

    function handleSubmit() {
        console.log('Salvei');
    }

    
    return (
        <Container>
            <HeaderBar handleClick={handleBackClick} title="Novo Colportor" leftIcon="back" />

            <Content onSubmit={handleSubmit}>
                <GoalCard colporteur={colporteur} setColporteur={setColporteur} />

                <SinceDateCard colporteur={colporteur} setColporteur={setColporteur} />
                
                <PersonalInfoForm colporteur={colporteur} setColporteur={setColporteur} />

                <Categories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <Buttons>
                    <ActionButtons onCancel={handleCancel} saveDisabled={isColpSaved} onSave={handleSubmit} />
                </Buttons>
            </Content>  

            <Menu />

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>
    )
}