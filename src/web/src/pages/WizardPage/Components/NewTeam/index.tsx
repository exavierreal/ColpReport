import { ChangeEvent, KeyboardEvent, MouseEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { CameraIcon, Container, ContainerDataList, Content, DataList, DataListItem, Form, GoalButton, Input, Logo, MainImage, Subheading, TeamFormBox } from "./styles";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { WizardProps } from "../../Interfaces/WizardProps";
import { useImage } from "../../../../shared/Hooks/useImage";
import { useDataList } from "../../Hooks/useDataList";
import { GoalModal } from "../../../../shared/Components/Modals/GoalModal";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../../../shared/Components/Modals/CancelModal";
import { Team } from "../../Interfaces/Team";
import { UnionSuggestion } from "../../Interfaces/UnionSuggestions";
import { getAssociationById, getSaveTeam, getUnionById, useSaveTeamApi } from "../../../../api/useTeamApi";
import { getUserToken } from "../../../../auth/useAuth";
import { Association } from "../../Interfaces/Association";


export function NewTeam(props: WizardProps) {
    const navigate = useNavigate();
    
    const { saveTeam, isLoading, error, isTeamSaved, setIsTeamSaved } = useSaveTeamApi();
    const { previewImage, inputRef, handleImageUpload, handleButtonClick } = useImage();
    const {  handleInputFocus, handleInputBlur, handleInputChange, handleKeyOnInput, handleMouseEnter, handleOptionClick,
             setDisplayUnionSelected, setDisplayAssociationSelected, setSelectedAssociation, setSelectedUnion,
             isUnionInputFocused, isAssociationInputFocused, keyboardFocusIndex, unionOptions, associationOptions,
             selectedUnion, selectedAssociation, selectedUnionIndex, selectedAssociationIndex, displayUnionSelected, displayAssociationSelected
    } = useDataList();

    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;
    
    const [showNextIcon, setShowNextIcon] = useState(false);
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [emptyInputs, setEmptyInputs] = useState<string[]>([]);
    const [team, setTeam] = useState<Team>({ imageData: undefined, name: '', unionId: '', associationId: '', goal: 0 });

    const teamNameInputRef = useRef<HTMLInputElement>(null);
    const unionInputRef = useRef<HTMLInputElement>(null);
    const associationInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTeam((prevTeam) => {
            let updateTeam = { ...prevTeam }

            if (selectedUnion) {
                updateTeam.unionId = selectedUnion.id;

                if (emptyInputs.includes("union"))
                    setEmptyInputs((prevEmptyInputs) => prevEmptyInputs.filter((input) => input !== "union"));
            } else {
                if (!emptyInputs.includes("union"))
                    setEmptyInputs((prevEmptyInputs) => [...prevEmptyInputs, "union"])
            }

            if (selectedAssociation) {
                updateTeam.associationId = selectedAssociation.id;

                if (emptyInputs.includes("association"))
                    setEmptyInputs((prevEmptyInputs) => prevEmptyInputs.filter((input) => input !== "association"));
            } else {
                if (!emptyInputs.includes("association"))
                    setEmptyInputs((prevEmptyInputs) => [...prevEmptyInputs, "association"])
            }

            if (previewImage)
                updateTeam.imageData = previewImage.split(",")[1];

            return updateTeam;
        })
    }, [selectedUnion, selectedAssociation, previewImage]);

    useEffect(() => {
         getSaveTeam(userId)
            .then(async (data) => {
                if (data) {
                    setTeam(data);
                    const association = await getAssociationById<Association>(data.associationId!);
                    const union = await getUnionById<UnionSuggestion>(association.unionId!);

                    setSelectedUnion(union);
                    setSelectedAssociation({ id: association.id, name: association.name, acronym: association.acronym });

                    if (teamNameInputRef.current)
                        teamNameInputRef.current.value = data.name;
                    
                    setDisplayUnionSelected(`${union.acronym} - ${union.name}`)
                    setDisplayAssociationSelected(`${association.acronym} - ${association.name}`)
                    setShowNextIcon(true);
                    setIsTeamSaved(true);
                }
            })
    }, [userId])
    
    useEffect(() => {
        setShowNextIcon(isTeamSaved)
    }, [isTeamSaved]);

    function handleTeamInputChange(e: ChangeEvent<HTMLInputElement>) {
        const teamName = e.target.value;

        removeErrorStyle("team-name");
        setIsTeamSaved(false);
        
        if (teamName.trim().length < 2) {
            if (!emptyInputs.includes("team-name"))
                setEmptyInputs((prevEmptyInputs) => [...prevEmptyInputs, "team-name"])
        }
        else
            setEmptyInputs((prevEmptyInputs) => prevEmptyInputs.filter((input) => input !== "team-name"));

        setTeam((prevTeam) => ({ ...prevTeam, name: teamName }));
    }

    function handleDatalist(isUnion: boolean, event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLLIElement>, action: string, option?: UnionSuggestion, index?: number) {
        setIsTeamSaved(false);

        switch(action) {
            case "change":
                isUnion ? removeErrorStyle("union") : removeErrorStyle("association");
                handleInputChange(isUnion, event as ChangeEvent<HTMLInputElement>);
                break;
            case "keydown":
                isUnion ? removeErrorStyle("union") : removeErrorStyle("association");
                handleKeyOnInput(isUnion, event as KeyboardEvent<HTMLInputElement>)
                break;
            case "click":
                isUnion ? removeErrorStyle("union") : removeErrorStyle("association");
                handleOptionClick(isUnion, option as UnionSuggestion, index as number, event as MouseEvent<HTMLLIElement>)
                break;
        }
    }

    function handleToggleGoalModal (e?: FormEvent) {
        if (e)
            e.preventDefault();
        
        setIsGoalModalOpen(!isGoalModalOpen);
    }

    function handleSaveGoal(value: number) {
        setTeam({ ...team, goal: value });
        setIsTeamSaved(!isTeamSaved);
    }

    function handleCancel (choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/");
    }

    function handleSubmit (e: FormEvent) {
        e.preventDefault();
        
        if (validateTeam())
            saveTeam(team)

        return;
    }

    function validateTeam() {
        let hasError = false;

        if (emptyInputs.includes("team-name") || team.name === "") {
            teamNameInputRef.current?.classList.add("input-error");
            hasError = true;
        }
        if (emptyInputs.includes("union")) {
            unionInputRef.current?.classList.add("input-error");
            hasError = true;
        }
        if (emptyInputs.includes("association")) {
            associationInputRef.current?.classList.add("input-error");
            hasError = true;
        }

        return !hasError;
    }

    function removeErrorStyle(inputName: string) {
        switch(inputName) {
            case "team-name":
                teamNameInputRef.current?.classList.contains("input-error") && teamNameInputRef.current?.classList.remove("input-error")
                break;
            case "union":
                unionInputRef.current?.classList.contains("input-error") && unionInputRef.current?.classList.remove("input-error")
                break;
            case "association":
                associationInputRef.current?.classList.contains("input-error") && associationInputRef.current?.classList.remove("input-error")
                break;
        }
    }

    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Nova Equipe" leftIcon="back" rightIcon={showNextIcon ? "next" : ""} />

            <Content onSubmit={handleSubmit}>
                <TeamFormBox>
                    <Logo>
                        <MainImage onClick={handleButtonClick}>
                            { previewImage ? <img src={previewImage} alt="Uploaded" /> : <Icon icon="fe:user" className="user-icon" width="100" /> }
                        </MainImage>

                        <input type="file" accept=".jpeg, .jpg, .png" ref={inputRef} onChange={handleImageUpload} />

                        <CameraIcon onClick={handleButtonClick}>
                            <Icon icon="akar-icons:camera" width="19" />
                        </CameraIcon>

                        <Subheading>
                            Insira o <em>logo</em> da sua Equipe!
                        </Subheading>
                    </Logo>

                    <Form>
                        <Input>
                            <label>Equipe:</label>
                            <input onChange={handleTeamInputChange} type="text" ref={teamNameInputRef} />
                        </Input>
                        <Input>
                            <label>União:</label>
                            <ContainerDataList onFocus={() => handleInputFocus(true)} onBlur={() => handleInputBlur(true)}>
                                <input
                                    ref={unionInputRef}
                                    type="text"
                                    value={displayUnionSelected}
                                    onKeyDown={(event) => handleDatalist(true, event, "keydown")}
                                    onChange={(event) => handleDatalist(true, event, "change")}
                                />
                                {isUnionInputFocused && (
                                    <DataList>
                                        {unionOptions.filter(
                                            (option) =>
                                                (!selectedUnion ||
                                                    option.name.toLowerCase().includes(selectedUnion.name.toLowerCase()) ||
                                                    option.acronym.toLowerCase().includes(selectedUnion.acronym.toLowerCase()))
                                        )
                                        .slice(0, 4)
                                        .map((option, index) => (
                                            <DataListItem
                                                key={option.id}
                                                selected={index === selectedUnionIndex}
                                                isKeyboardFocused={index === keyboardFocusIndex}
                                                onMouseDown={(event) => handleDatalist(true, event, "click", option, index)}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                >
                                                    {option.acronym} - {option.name}
                                            </DataListItem>
                                        ))}
                                    </DataList>
                                )}
                            </ContainerDataList>
                        </Input>
                        <Input>
                            <label>Associação:</label>
                            <ContainerDataList onFocus={() => handleInputFocus(false)} onBlur={() => handleInputBlur(false)}>
                                <input
                                    ref={associationInputRef}
                                    type="text"
                                    value={displayAssociationSelected}
                                    onKeyDown={(event) => handleDatalist(false, event, "keydown")}
                                    onChange={(event) => handleDatalist(false, event, "change")}
                                />
                                {isAssociationInputFocused && (
                                    <DataList>
                                        {associationOptions.filter(
                                            (option) =>
                                                (!selectedAssociation ||
                                                    option.name.toLowerCase().includes(selectedAssociation.name.toLowerCase()) ||
                                                    option.acronym.toLowerCase().includes(selectedAssociation.acronym.toLowerCase())
                                                )
                                            )
                                            .slice(0, 4)
                                            .map((option, index) => (
                                                <DataListItem
                                                    key={option.id}
                                                    selected={index === selectedAssociationIndex}
                                                    isKeyboardFocused={index === keyboardFocusIndex}
                                                    onMouseDown={(event) => handleDatalist(false, event, "click", option, index)}
                                                    onMouseEnter={() => handleMouseEnter(index)}
                                                >
                                                    {option.acronym} - {option.name}
                                            </DataListItem>
                                        ))}
                                    </DataList>
                                )}
                            </ContainerDataList>
                        </Input>
                    </Form>

                    <GoalButton onClick={handleToggleGoalModal}>Definir Meta</GoalButton>

                    <ProgressBar index={props.index} />
                </TeamFormBox>

                <ActionButtons onCancel={handleCancel} saveDisabled={isTeamSaved} />
            </Content>

            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={team.goal} type="team" /> }
            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>
    );
}