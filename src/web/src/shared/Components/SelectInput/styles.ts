import styled from "styled-components";
import { SelectInputProps } from ".";

export const SelectButton = styled.button<SelectInputProps>`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid ${(props => props.selectedColor ? props.selectedColor : 'var(--gray-v2)')};
    font: ${props => props.selectedColor ? 700 : 400} 12px 'Roboto';
    color: ${(props => props.selectedColor ? props.selectedColor : 'var(--dark-v2)')};
    text-transform: uppercase;
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    cursor: pointer;
`;