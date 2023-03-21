import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import Modal from "react-modal";

import './modal.css';
import { Banner, CloseIcon, Content, Heading } from "./styles";

Modal.setAppElement("#root");

export function AlmostThereModal({ onClose }: {onClose: VoidFunction}) {

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Teste Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <Content>
                <Banner src="/assets/profile-data-animated.svg" />

                <Heading>
                    <h1>Você está quase lá!</h1>
                    <p>Complete seu cadastro para começar.</p>

                    <button>
                        <Icon icon="akar-icons:arrow-right" className="arrow-icon" width="14px" height="14px" />
                        Continuar
                    </button>
                </Heading>
            </Content>

            <CloseIcon>
                <Icon onClick={onClose} icon="akar-icons:cross" className="close-icon" width="30px" height="30px" />
            </CloseIcon>
        </Modal>
    );
}