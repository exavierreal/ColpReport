import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { SubtitleBox } from "../../../../shared/Components/Titles/SubtitleBox";
import { Button, CameraIcon, CardBox, Container, Content, ContentBox, MainImage, Picture, Subheading } from "./styles";
import { WizardProps } from "../../Interfaces/WizardProps";
import { useImage } from "../../../../shared/Hooks/useImage";
import { GoalModal } from "../../../../shared/Components/Modals/GoalModal";
import { Leader } from "../../Interfaces/Leader";
import { SinceDateModal } from "../../../../shared/Components/Modals/SinceDateModal";
import { FormatDatePresentation } from "../../../../shared/Utils/FormatDatePresentation";
import { Category } from "../../../../shared/Models/Category.model";
import { useSaveLeaderApi } from "../../../../api/useLeaderApi";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../../../shared/Components/Modals/CancelModal";
import { Categories } from "../../../../shared/Components/Sections/Categories";

export function NewLeader(props: WizardProps) {
    const navigate = useNavigate();
    const { previewImage, filename, inputRef, handleImageUpload, handleButtonClick } = useImage();
    const { saveLeader, isLoading, error, isLeaderSaved, setIsLeaderSaved } = useSaveLeaderApi();
    
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [isSinceDateModalOpen, setIsSinceDateModalOpen ] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    
    const [leader, setLeader] = useState<Leader>({ imageData: undefined, goal: 0, sinceDate: new Date(), categoryIds: [] })
    
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    useEffect(() => {
        const uniqueCategoryIds = [...new Set(selectedCategories.map(category => category.id))];
        
        setLeader((prevLeader) => {
            let updateLeader = { ...prevLeader }

            if (previewImage)
                updateLeader.imageData = previewImage.split(",")[1];

            if (filename)
                updateLeader.filename = filename;

            updateLeader.categoryIds = uniqueCategoryIds;

            return updateLeader;
        })
    }, [previewImage, filename, selectedCategories]);
    
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

    function handleCancel(choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/");
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        saveLeader(leader);
    }

    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Novo Líder" leftIcon="back" rightIcon={isLeaderSaved ? "next": ""} />
            
            <Content onSubmit={handleSubmit}>
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

                <Categories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <ProgressBar index={props.index} />

                <ActionButtons onCancel={handleCancel} saveDisabled={isLeaderSaved} />
            </Content>
        
            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={leader.goal} type="leader" /> }
            { isSinceDateModalOpen && <SinceDateModal initialValue={leader.sinceDate} onClose={handleToggleSinceDateModal} onSave={handleSaveSinceDate} /> }

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>

        
    );
}