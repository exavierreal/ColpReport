import { Icon } from "@iconify-icon/react";
import { ValuesBoxProps } from "../../Interfaces/ValuesBoxProps";
import { Circle, CircleOpacity, Container, Content, PresentationIcon, Title, Total, Value } from "./styles";
import { DefineStyle } from "../../Utils/DefineStyle";

export function ValuesBox(props: ValuesBoxProps) {
    const values = DefineStyle(props.type);
    
    return (
        <Container background={ values!.mainColor }>
            <Content>
                <Title>{ values!.title }</Title>
                <Value>R$ 3.241,00</Value>
                <Total>{ values!.totalText } 45</Total>
            </Content>

            <PresentationIcon>
                <Icon icon={ values!.icon } width="24" className="logo-icon" />
            </PresentationIcon>

            <Circle background={ values!.secondaryColor } />
            <CircleOpacity />
        </Container>
    )
}