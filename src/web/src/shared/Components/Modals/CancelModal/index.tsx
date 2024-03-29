import { Icon } from "@iconify-icon/react";
import { AlertImg, Buttons, Heading, Message, Modal, NoButton, Overlay, Title, YesButton } from "./styles";
import { CancelModalProps } from "../../../Interfaces/CancelModalProps";
import { FormEvent } from "react";

export function CancelModal({ onCancelConfirm }: CancelModalProps) {
    function handleClick(choice: string, e: FormEvent) {
        e.preventDefault();
        
        choice == "yes" ? "yes" : "no";

        onCancelConfirm(choice)
    }
    
    return (
        <Overlay>
            <Modal>
                <Heading>
                    <AlertImg src="/assets/akar-icons_triangle-alert-danger.svg" />
                    <Title>Confirmação</Title>
                    <Message>Você tem certeza que deseja cancelar?</Message>
                </Heading>

                <Buttons>
                    <YesButton onClick={(e) => handleClick("yes", e)}>
                        <Icon icon="akar-icons:double-check" width="20" />
                        <p>Sim</p>
                    </YesButton>

                    <NoButton onClick={(e) => handleClick("no", e)}>
                        <Icon icon="akar-icons:cross" width="20" />
                        <p>Não</p>
                    </NoButton>
                </Buttons>
            </Modal>
        </Overlay>
    );
}