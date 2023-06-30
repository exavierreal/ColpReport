import { useNavigate } from "react-router-dom";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { NextButton } from "../../../../shared/Components/NextButton";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { WizardProps } from "../../Interfaces/WizardProps";
import { Container, Content, Heading } from "./styles";

export function Welcome(props: WizardProps) {
    const navigate = useNavigate();
    
    function handleStart() {
        navigate('/dashboard');
    }
    
    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Bem-Vindo" leftIcon="back" />

            <Content>
                <Heading>
                    <img src="/assets/new-team- members-bro.svg"/>

                    <h1>Parabéns!</h1>
                    <h3>Você concluiu o seu cadastro.</h3>

                    <NextButton handlePageWizard={handleStart} text="Começar" />
                </Heading>

                <ProgressBar index={props.index} />
            </Content>
        </Container>
    );
}