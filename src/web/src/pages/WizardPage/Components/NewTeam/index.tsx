import { useState, useRef } from "react";
import React from "react";
import { Icon } from "@iconify-icon/react";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { CameraIcon, Container, Content, Form, GoalButton, Input, Logo, MainImage, Subheading, TeamFormBox } from "./styles";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { WizardProps } from "../../Interfaces/WizardProps";



export function NewTeam(props: WizardProps) {
    const [isTeamSaved, setIsTeamSaved] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleImageUpload (event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        debugger
        
        const file = event.target.files?.[0];

        if (file && isSupportedFileType(file)) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            }

            reader.readAsDataURL(file);
            onImageUpload(file);
        }
    }

    function handleButtonClick() {
        if (inputRef.current)
            inputRef.current.click();
    }

    function isSupportedFileType (file: File) {
        const allowedExtensions = ['.jpeg', '.jpg', '.png'];
        const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));

        return allowedExtensions.includes(fileExtension);
    }

    function onImageUpload(file: File) {
        
    }

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
                            <input type="text" />
                        </Input>
                        <Input>
                            <label>Associação:</label>
                            <input type="text" />
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