import { Icon } from "@iconify-icon/react";
import { ActionButtons, Container, GoalButton, GoalContent, GoalHeading, GoalLabel, MainImage, OperationButton, Picture, SelectedCategory, SelectedName, Slider, SliderImage } from "./styles";
import { GoalBoxProps } from "../../Interfaces/GoalBoxProps";
import { ChangeEvent, useState } from "react";

export function GoalBox (props: GoalBoxProps) {
    const [sliderValue, setSliderValue] = useState<number>(0);

    function handleSliderChange(event: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setSliderValue(value);
    }
    
    return (
        <Container>
            <GoalHeading>{ props.title }</GoalHeading>
            
            <GoalContent>
                <SliderImage>
                    {/* <Slider type="range" min="0" max="100000" value={sliderValue} id="goalSlider" onChange={handleSliderChange} /> */}
                    <Picture>
                        <MainImage>
                            <Icon icon="fe:user" className="user-icon" width="100" />
                        </MainImage>
                    </Picture>
                </SliderImage>

                <SelectedName>Joshua Silva</SelectedName>
                <SelectedCategory><span>Categoria:</span> Porta em Porta</SelectedCategory>

                <ActionButtons>
                    <OperationButton>
                        <Icon icon="akar-icons:money" width="16" />
                    </OperationButton>

                    <OperationButton>
                        <Icon icon="akar-icons:cart" width="16" />
                    </OperationButton>

                    <OperationButton>
                        <Icon icon="akar-icons:sign-out" width="16" />
                    </OperationButton>
                </ActionButtons>

                <GoalButton>Definir Meta</GoalButton>
                <GoalLabel>R$ 10.000,00</GoalLabel>
            </GoalContent>
        </Container>
    );
}