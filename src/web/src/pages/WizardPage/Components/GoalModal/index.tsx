import { Icon } from "@iconify-icon/react";
import { ArrowsButton, Container, GoalField, GoalInput, HeadImage, Heading, Label, Modal, Overlay, SaveButton, Subheading, Title } from "./styles";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GoalModalProps } from "../../Interfaces/GoalModalProps";

export function GoalModal({ onCloseModal, onSaveGoal, initialValue, type }: GoalModalProps) {
    const [inputValue, setInputValue] = useState(formatValue(initialValue.toString()));
    const inputRef = useRef<HTMLInputElement>(null);
    const prevCursorPosition = useRef<number | null>(null);

    const getTitle = () => {
        switch(type) {
            case 'team':
                return 'Defina a meta inicial da equipe:';
            case 'leader':
                return 'Defina a sua meta inicial:'
        }
    }

    useEffect(() => {
        if (inputRef.current && prevCursorPosition.current !== null) {
            inputRef.current.selectionStart = inputRef.current.selectionEnd = prevCursorPosition.current;
        }
    }, [inputValue]);
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const cleanedValue = value.replace(/[^\d,]/g, '');

        const formattedValue = formatValue(cleanedValue);

        setInputValue(formattedValue);

        const cursorPosition = e.target.selectionStart;
        prevCursorPosition.current = cursorPosition;
    }

    function handleIncrementDecrement (option: string) {
        const STANDARD_VALUE_OF_CALCULATION = 10000;
        let value = parseFloat(inputValue.replace(".", "").replace(",", "."));
        
        switch(option) {
            case "up":
                value += STANDARD_VALUE_OF_CALCULATION;
                break;
            case "down":
                value -= STANDARD_VALUE_OF_CALCULATION;
                break;
        }

        if (value < 0)
            value = 0;
        
        const formattedValue = formatValue(value.toString());

        setInputValue(formattedValue);
    }

    function formatValue (value: string) {
        const [integerPart, decimalPart] = value.split(',');
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formattedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';

        return `${formattedIntegerPart},${formattedDecimalPart.padEnd(2, '0')}`;
    }

    function handleClose() {
        onCloseModal();
    }

    function handleSave() {
        const value = parseFloat(inputValue.replace(".", "").replace(",", "."));

        onSaveGoal(value);
        onCloseModal();
    }

    return (
        <Overlay onClick={handleClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Container>
                    <HeadImage src="/assets/akar-icons_statistic-up.svg" />
                    <Heading>
                        <Title>Meta!!!</Title>
                        <Subheading>{ getTitle() }</Subheading>
                    </Heading>

                    <GoalField>
                        <Label>R$</Label>
                        <GoalInput type="text" value={inputValue} onChange={handleChange} ref={inputRef} />
                        <ArrowsButton>
                            <Icon icon="akar-icons:chevron-up-small" onClick={() => handleIncrementDecrement("up")} />
                            <Icon icon="akar-icons:chevron-down-small" onClick={() => handleIncrementDecrement("down")} />
                        </ArrowsButton>
                    </GoalField>

                    <SaveButton onClick={handleSave}>
                        <Icon icon="akar-icons:double-check" width="20" />
                        <p>Salvar</p>
                    </SaveButton>
                </Container>

                <Icon icon="akar-icons:cross" className="close-button" width="24" onClick={handleClose} />
            </Modal>
        </Overlay>
    );
}