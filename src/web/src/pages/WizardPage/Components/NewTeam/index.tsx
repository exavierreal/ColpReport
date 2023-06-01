import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { CameraIcon, Container, ContainerDataList, Content, DataList, DataListItem, Form, GoalButton, Input, Logo, MainImage, Subheading, TeamFormBox } from "./styles";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { WizardProps } from "../../Interfaces/WizardProps";
import { useImage } from "../../Hooks/useImage";
import { useDataList } from "../../Hooks/useDataList";


export function NewTeam(props: WizardProps) {
    const [isTeamSaved, setIsTeamSaved] = useState(false);
    const { previewImage, inputRef, handleImageUpload, handleButtonClick } = useImage();
    const { isUnionInputFocused, isAssociationInputFocused, setIsAssociationInputFocused, handleInputFocus, handleInputBlur,
            selectedUnion, selectedAssociation, handleInputChange, handleKeyOnInput, handleMouseEnter, handleOptionClick,
            selectedUnionIndex, selectedAssociationIndex, keyboardFocusIndex, unionOptions, associationOptions
    } = useDataList();

    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Nova Equipe" leftIcon="back" rightIcon={isTeamSaved ? "next" : ""} />

            <Content>
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
                            <input type="text" />
                        </Input>
                        <Input>
                            <label>União:</label>
                            <ContainerDataList onFocus={() => handleInputFocus(true)} onBlur={() => handleInputBlur(true)}>
                                <input
                                    type="text"
                                    value={selectedUnion}
                                    onKeyDown={(event) => handleKeyOnInput(true, event)}
                                    onChange={(event) => handleInputChange(true, event)}
                                />
                                {selectedUnion.length > 0 && isUnionInputFocused && (
                                    <DataList>
                                        {unionOptions.filter((option) => option.toLowerCase().includes(selectedUnion.toLowerCase())).map((option, index) => (
                                                <DataListItem
                                                    key={option}
                                                    selected={index === selectedUnionIndex}
                                                    isKeyboardFocused={index === keyboardFocusIndex}
                                                    onMouseDown={(event) => handleOptionClick(true, option, index, event)}
                                                    onMouseEnter={() => handleMouseEnter(index)}
                                                    >
                                                        {option}
                                                </DataListItem>
                                            ))}
                                    </DataList>
                                )}
                            </ContainerDataList>
                        </Input>
                        <Input>
                            <label>Associação:</label>
                            <ContainerDataList onFocus={() => setIsAssociationInputFocused(true)} onBlur={() => handleInputBlur(false)}>
                                <input
                                    type="text"
                                    value={selectedAssociation}
                                    onKeyDown={(event) => handleKeyOnInput(false, event)}
                                    onChange={(event) => handleInputChange(false, event)}
                                />
                                {selectedAssociation.length > 0 && isAssociationInputFocused && (
                                    <DataList>
                                        {associationOptions.filter((option) => option.toLowerCase().includes(selectedAssociation.toLowerCase())).map((option, index) => (
                                            <DataListItem
                                                key={option}
                                                selected={index === selectedAssociationIndex}
                                                isKeyboardFocused={index === keyboardFocusIndex}
                                                onMouseDown={(event) => handleOptionClick(false, option, index, event)}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                            >
                                                    {option}
                                            </DataListItem>
                                        ))}
                                    </DataList>
                                )}
                            </ContainerDataList>
                        </Input>
                    </Form>

                    <GoalButton>Definir Meta</GoalButton>

                    <ProgressBar index={props.index} />
                </TeamFormBox>

                <ActionButtons />
            </Content>
        </Container>
    );
}