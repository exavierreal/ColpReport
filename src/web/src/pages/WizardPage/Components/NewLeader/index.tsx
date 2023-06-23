import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { Subtitle } from "../../../../shared/Components/Subtitle";
import { SubtitleBox } from "../../../../shared/Components/SubtitleBox";
import { Button, CameraIcon, CardBox, Categories, CategoriesBoxes, CategoryBox, Container, Content, ContentBox, MainImage, Picture, Subheading } from "./styles";
import { WizardProps } from "../../Interfaces/WizardProps";
import { useImage } from "../../Hooks/useImage";
import { GoalModal } from "../GoalModal";
import { Leader } from "../../Interfaces/Leader";
import { SinceDateModal } from "../SinceDateModal";
import { FormatDatePresentation } from "../../../../shared/Utils/FormatDatePresentation";
import { Category } from "../../Interfaces/Category";
import { GetCategories } from "../../Api/useLeaderApi";
import { CategoryModal } from "../CategoryModal";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../../../shared/Components/Modals/CancelModal";

export function NewLeader(props: WizardProps) {
    const navigate = useNavigate();
    const { previewImage, inputRef, handleImageUpload, handleButtonClick } = useImage();
    
    const [isLeaderSaved, setIsLeaderSaved] = useState(false);
    
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [isSinceDateModalOpen, setIsSinceDateModalOpen ] = useState(false);
    const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    
    const [leader, setLeader] = useState<Leader>({ imageData: undefined, goal: 0, sinceDate: new Date(), categoryIds: [] })
    
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoriesDisplayed, setCategoriesDisplayed] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    
    useEffect(() => {
        const getCategories = async () => {
            const data = await GetCategories();
            setCategories(data);
        }

        getCategories();
    }, []);

    useEffect(() => {
        setCategoriesDisplayed(categories.slice(0, 3));
    }, [categories]);

    useEffect(() => {
        const uniqueCategoryIds = [...new Set(selectedCategories.map(category => category.id))];
        
        setLeader((prevLeader) => {
            let updateLeader = { ...prevLeader }

            if (previewImage)
                updateLeader.imageData = previewImage.split(",")[1];

            return updateLeader;
        })
    }, [previewImage, selectedCategories]);
    
    function formatGoalValue (value: string) {
        const [integerPart, decimalPart] = value.split(',');
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formattedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';

        return `${formattedIntegerPart},${formattedDecimalPart.padEnd(2, '0')}`;
    }

    function handleCategorySelect (category: Category, event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        
        selectedCategories.includes(category)
            ? setSelectedCategories(selectedCategories.filter((cat) => cat !== category))
            : setSelectedCategories([...selectedCategories, category])
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

    function handleToggleCategoryModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsCategoriesModalOpen(!isCategoriesModalOpen);
    }

    function handleCancel(choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/");
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setLeader((prevTeam) => ({...prevTeam, categoryIds: selectedCategories.map((category) => category.id)}))
        console.log(leader);
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

                <Categories>
                    <Subtitle title="Categoria(s)" />

                    <CategoriesBoxes>
                        {categoriesDisplayed?.map((category) => (
                            <CategoryBox
                                key={category.id}
                                selected={selectedCategories.includes(category)}
                                onClick={(e) => handleCategorySelect(category, e)}>
                                    { category.name }
                            </CategoryBox>
                        ))}

                        <CategoryBox
                            selected={selectedCategories.some((category) => category.sequential > 2)}
                            onClick={handleToggleCategoryModal}>Outros</CategoryBox>
                    </CategoriesBoxes>
                </Categories>

                <ProgressBar index={props.index} />

                <ActionButtons onCancel={handleCancel} saveDisabled={isLeaderSaved} />
            </Content>
        
            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={leader.goal} type="leader" /> }
            { isSinceDateModalOpen && <SinceDateModal initialValue={leader.sinceDate} onClose={handleToggleSinceDateModal} onSave={handleSaveSinceDate} /> }
            { isCategoriesModalOpen && <CategoryModal categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} onClose={handleToggleCategoryModal} /> }

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>

        
    );
}