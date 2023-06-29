import { Icon } from "@iconify-icon/react";
import { Container, DateField, DateInput, HeadImage, Heading, Modal, Overlay, SaveButton, Subheading, Title } from "./styles";
import { SinceDataModalProps } from "../../../Interfaces/SinceDataModalProps";
import { ChangeEvent, useRef, useState } from "react";

export function SinceDateModal({initialValue, onClose: handleClose, onSave: saveDate}: SinceDataModalProps) {
    const [selectedDate, setSelectedDate] = useState(formatDate(initialValue))
    
    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function formatDateString(dateString: string): Date {
        const [year, month, day] = dateString.split('-');
        return new Date(Number(year), Number(month) - 1, Number(day));
    }
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSelectedDate(value);
    }

    function handleSave() {
        saveDate(formatDateString(selectedDate));
        handleClose();
    }

    return (
        <Overlay onClick={handleClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Container>
                    <HeadImage src="/assets/akar-icons_calendar.svg" />
                    <Heading>
                        <Title>Início!</Title>
                        <Subheading>Desde quando você colporta?</Subheading>
                    </Heading>

                    <DateField>
                        <DateInput type="date" value={selectedDate} onChange={handleChange} />
                    </DateField>

                    <SaveButton onClick={handleSave}>
                        <Icon icon="akar-icons:double-check" width="20" />
                        <p>Salvar</p>
                    </SaveButton>
                </Container>

                <Icon icon="akar-icons:cross" width="24" className="close-button" onClick={handleClose} />
            </Modal>
        </Overlay>
    );
}