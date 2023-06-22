import { Icon } from "@iconify-icon/react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { Subtitle } from "../../../../shared/Components/Subtitle";
import { SubtitleBox } from "../../../../shared/Components/SubtitleBox";
import { Button, CameraIcon, CardBox, Categories, CategoriesBoxes, CategoryBox, Container, ContentBox, MainImage, Picture, Subheading } from "./styles";
import { WizardProps } from "../../Interfaces/WizardProps";
import { FormEvent, useState } from "react";
import { useImage } from "../../Hooks/useImage";
import { GoalModal } from "../GoalModal";
import { Leader } from "../../Interfaces/Leader";
import { SinceDateModal } from "../SinceDateModal";
import { FormatDatePresentation } from "../../../../shared/Utils/FormatDatePresentation";

export function NewLeader(props: WizardProps) {
    const [isLeaderSaved, setIsLeaderSaved] = useState(false);
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [isSinceDateModalOpen, setIsSinceDateModalOpen ] = useState(true);
    const [leader, setLeader] = useState<Leader>({ imageData: undefined, goal: 0, sinceDate: new Date(), categoryId: '' })

    const { previewImage, inputRef, handleImageUpload, handleButtonClick } = useImage();
    
    function formatGoalValue (value: string) {
        const [integerPart, decimalPart] = value.split(',');
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formattedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';

        return `${formattedIntegerPart},${formattedDecimalPart.padEnd(2, '0')}`;
    }

    function handleToggleGoalModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsGoalModalOpen(!isGoalModalOpen);
    }

    function handleSaveGoal(value: number) {
        setLeader({ ...leader, goal: value });
    }

    function handleToggleSinceDateModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsSinceDateModalOpen(!isSinceDateModalOpen);
    }

    function handleSaveSinceDate(date: Date) {
        setLeader({ ...leader, sinceDate: date })
    }

    function handleCancel() {
        console.log("Cancelei");
    }

    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Novo Líder" leftIcon="back" rightIcon={isLeaderSaved ? "next": ""} />

            <CardBox className="mt-first">
                <SubtitleBox title="Definição de Metas" />

                <ContentBox>

                    <Picture>
                        <MainImage onClick={handleButtonClick}>
                        { previewImage ? <img src={previewImage} alt="Uploaded" /> : <Icon icon="fe:user" className="user-icon" width="100" /> }
                        </MainImage>

                        <input type="file" accept=".jpeg, .jpg, .png" ref={inputRef} onChange={handleImageUpload} />

                        <CameraIcon onClick={handleButtonClick}>
                            <Icon icon="akar-icons:camera" width="24" />
                        </CameraIcon>
                    </Picture>

                    <Subheading className="price">R$ { formatGoalValue(leader.goal.toString()) }</Subheading>

                    <Button onClick={handleToggleGoalModal}>Definir Meta</Button>
                </ContentBox>
            </CardBox>

            <CardBox>
                <SubtitleBox title="Colporta desde" />

                <ContentBox>
                    <Subheading className="since-date">{ FormatDatePresentation(leader.sinceDate) }</Subheading>
                    <Button onClick={handleToggleSinceDateModal}>Definir Data</Button>
                </ContentBox>
            </CardBox>

            <Categories>
                <Subtitle title="Categoria(s)" />

                <CategoriesBoxes>
                    <CategoryBox type="button" value="Porta em Porta" />
                    <CategoryBox type="button" value="Agendamento" />
                    <CategoryBox type="button" value="Indicação" />
                    <CategoryBox type="button" value="Outros" />
                </CategoriesBoxes>
            </Categories>

            <ProgressBar index={props.index} />

            <ActionButtons onCancel={handleCancel} saveDisabled={isLeaderSaved} />
        
            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={leader.goal} type="leader" /> }
            { isSinceDateModalOpen && <SinceDateModal initialValue={leader.sinceDate} onClose={handleToggleSinceDateModal} onSave={handleSaveSinceDate} /> }
        </Container>

        
    );
}