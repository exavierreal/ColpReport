import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { NextButton } from "../../../../shared/Components/NextButton";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { WizardProps } from "../../Interfaces/WizardProps";
import { Container, Content, Heading } from "./styles";

export function AlmostThere(props: WizardProps) {
    return (
        <Container>
            <HeaderBar title="Bem-Vindo" leftIcon="close" />

            <Content>
                <Heading>
                    <img src="/assets/profile-data-animated.svg" />

                    <h1>Você está quase lá!</h1>
                    <h3>Complete seu cadastro para começar</h3>
                    
                    <NextButton handlePageWizard={props.handlePageWizard} text="Continuar" />
                </Heading>

                <ProgressBar index={props.index} />
            </Content>
        </Container>
    );
}