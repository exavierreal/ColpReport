import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { NextButton } from "../../../../shared/Components/NextButton";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { WizardProps } from "../../Interfaces/WizardProps";
import { Container, Content, Heading } from "./styles";

export function Welcome(props: WizardProps) {
    return (
        <Container>
            <HeaderBar title="Bem-Vindo" leftIcon="back" />

            <Content>
                <Heading>
                    <img src="/assets/new-team- members-bro.svg"/>

                    <h1>Parabéns!</h1>
                    <h3>Você concluiu o seu cadastro.</h3>

                    <NextButton text="Começar" />
                </Heading>

                <ProgressBar index={props.index} />
            </Content>
        </Container>
    );
}