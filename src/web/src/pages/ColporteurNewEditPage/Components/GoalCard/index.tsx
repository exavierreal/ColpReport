import { Icon } from "@iconify-icon/react";
import { SubtitleBox } from "../../../../shared/Components/Titles/SubtitleBox";
import { CameraIcon, Container, Content, MainImage, Picture, Subheading } from "./styles";
import { useImage } from "../../../../shared/Hooks/useImage";
import { FormEvent, useEffect, useState } from "react";
import { GoalModal } from "../../../../shared/Components/Modals/GoalModal";
import { ColpParamsProps } from "../../Interfaces/ColpParamsProps";
import { DefineButtonMob } from "../../../../shared/Components/Buttons/Mobile/DefineButtonMob";
import { FormatMoneyValue } from "../../../../shared/Utils/FormatMoneyValue";

export function GoalCard ({ colporteur, setColporteur }: ColpParamsProps) {
    const { previewImage, filename, inputRef, handleImageUpload, handleButtonClick } = useImage();

    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);

    useEffect(() => {
        setColporteur((prevColp) => {
            let updatedColp = { ...prevColp }

            if (previewImage)
                updatedColp.imageData = previewImage.split(",")[1];
            
            if (filename)
                updatedColp.filename = filename;

            return updatedColp;
        })
    }, [previewImage, filename]);

    function handleToggleGoalModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsGoalModalOpen(!isGoalModalOpen);
    }

    function handleSaveGoal(value: number) {
        setColporteur({ ...colporteur, goal: value });
    }
    
    return (
        <Container>
            <SubtitleBox title="Definição de Metas" />

            <Content>
                <Picture>
                    <MainImage onClick={handleButtonClick}>
                        { previewImage ? <img src={previewImage} alt="Uploaded" /> : <Icon icon="fe:user" className="user-icon" width="100" /> }
                    </MainImage>

                    <input type="file" accept=".jpeg, .jpg, .png" ref={inputRef} onChange={handleImageUpload} />

                    <CameraIcon onClick={handleButtonClick}>
                        <Icon icon="akar-icons:camera" width="24" />
                    </CameraIcon>
                </Picture>

                <Subheading className="price">R$ { FormatMoneyValue(colporteur.goal!.toString()) }</Subheading>

                <DefineButtonMob text="Definir Meta" onClick={handleToggleGoalModal} />
            </Content>

            { isGoalModalOpen && <GoalModal onCloseModal={handleToggleGoalModal} onSaveGoal={handleSaveGoal} initialValue={colporteur.goal!} type="leader" /> }
        </Container>
    )
}