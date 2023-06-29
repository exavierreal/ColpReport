import { Icon } from "@iconify-icon/react";
import { ArrowsButton, GoalField, GoalInput, Label } from "./styles";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FormatMoneyValue } from "../../../../shared/Utils/FormatMoneyValue";
import { ParamsProps } from "../../Interfaces/ParamsProps";

export function InputValue({ movementSelected }: ParamsProps) {
    const [inputValue, setInputValue] = useState(FormatMoneyValue("0.00"));
    const inputRef = useRef<HTMLInputElement>(null);
    const prevCursorPosition = useRef<number | null>(null);
    
    useEffect(() => {
        if (inputRef.current && prevCursorPosition.current !== null) {
            inputRef.current.selectionStart = inputRef.current.selectionEnd = prevCursorPosition.current;
        }
    }, [inputValue]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const cleanedValue = value.replace(/[^\d,]/g, '');

        const formattedValue = FormatMoneyValue(cleanedValue);

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
        
        const formattedValue = FormatMoneyValue(value.toString());

        setInputValue(formattedValue);
    }

    return (
        <GoalField>
            <Label>R$</Label>
            <GoalInput type="text" value={inputValue} onChange={handleChange} ref={inputRef} movementSelected={movementSelected} />
            <ArrowsButton>
                <Icon icon="akar-icons:chevron-up-small" onClick={() => handleIncrementDecrement("up")} />
                <Icon icon="akar-icons:chevron-down-small" onClick={() => handleIncrementDecrement("down")} />
            </ArrowsButton>
        </GoalField>
    );
}