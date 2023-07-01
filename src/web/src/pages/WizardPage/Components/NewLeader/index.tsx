import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { SubtitleBox } from "../../../../shared/Components/Titles/SubtitleBox";
import { Button, CameraIcon, CardBox, Container, Content, ContentBox, FinalSection, MainImage, Picture, Subheading } from "./styles";
import { WizardProps } from "../../Interfaces/WizardProps";
import { useImage } from "../../../../shared/Hooks/useImage";
import { GoalModal } from "../../../../shared/Components/Modals/GoalModal";
import { ColporteurModel } from "../../../../shared/Models/Colporteur.model.ts";
import { SinceDateModal } from "../../../../shared/Components/Modals/SinceDateModal";
import { FormatDatePresentation } from "../../../../shared/Utils/FormatDatePresentation";
import { CategoryModel } from "../../../../shared/Models/Category.model";
import { getSavedLeader, useSaveLeaderApi } from "../../../../api/useLeaderApi";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../../../shared/Components/Modals/CancelModal";
import { Categories } from "../../../../shared/Components/Sections/Categories";
import { getUserToken } from "../../../../auth/useAuth";
import { FormatMoneyValue } from "../../../../shared/Utils/FormatMoneyValue";
import { GetCategoryById } from "../../../../api/useCategoryApi";

export function NewLeader(props: WizardProps) {
    const navigate = useNavigate();
    const { previewImage, filename, inputRef, handleImageUpload, handleButtonClick, setPreviewImage, setFilename } = useImage();
    const { saveLeader, isLoading, error, isLeaderSaved, setIsLeaderSaved } = useSaveLeaderApi();

    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;
    
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [isSinceDateModalOpen, setIsSinceDateModalOpen ] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    
    const [leader, setLeader] = useState<ColporteurModel>({ imageData: undefined, goal: 0, sinceDate: new Date(), categoryIds: [] })
    
    const [selectedCategories, setSelectedCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        getSavedLeader(userId)
            .then(async (response) => {
                if (response) {
                    setLeader((prevLeader) => {
                        let updatedLeader = { ...prevLeader }

                        if (response.imageData) {
                            const base64image = `data:image/png;base64,${response.imageData}`;
                            setPreviewImage(base64image);
                            setFilename(response.filename!);

                            updatedLeader.imageData = response.imageData;
                            updatedLeader.filename = response.filename;
                        }

                        updatedLeader.sinceDate = new Date(response.sinceDate!);
                        updatedLeader.goal = response.goal;

                        if (response.categoryIds) {
                            updatedLeader.categoryIds = response.categoryIds;
                        }

                        return updatedLeader;
                    });

                    const categoryPromises = response.categoryIds!.map(async (id) => {
                        return await GetCategoryById(id);
                    });

                    const categories = await Promise.all(categoryPromises);
                    setSelectedCategories(categories);
                    
                    setIsLeaderSaved(true);
                }
            })
    }, [userId])

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

                        <Subheading className="price">R$ { FormatMoneyValue(leader.goal!.toString()) }</Subheading>

                        <Button onClick={handleToggleGoalModal}>Definir Meta</Button>
                    </ContentBox>
                </CardBox>

                <CardBox>
                    <SubtitleBox title="Colporta desde" />

                    <ContentBox>
                        <Subheading className="since-date">{ FormatDatePresentation(leader.sinceDate!) }</Subheading>
                        <Button onClick={handleToggleSinceDateModal}>Definir Data</Button>
                    </ContentBox>
                </CardBox>

                <Categories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

                <FinalSection>
                    <ProgressBar index={props.index} />

                    <ActionButtons onCancel={handleCancel} saveDisabled={isLeaderSaved} />
                </FinalSection>
            </Content>
        
            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={leader.goal!} type="leader" /> }
            { isSinceDateModalOpen && <SinceDateModal initialValue={leader.sinceDate!} onClose={handleToggleSinceDateModal} onSave={handleSaveSinceDate} /> }

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>

        
    );
}