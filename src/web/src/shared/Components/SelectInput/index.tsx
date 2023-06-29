import { SelectButton } from "./styles";

export interface SelectInputProps {
    text?: string;
    selectedColor?: string;
    isActive?: boolean;
    onClick: () => void;
}

export function SelectInput(props: SelectInputProps) {
    return (
        <SelectButton onClick={props.onClick} selectedColor={props.isActive ? props.selectedColor : undefined} >
            { props.text }
        </SelectButton>
    );
}