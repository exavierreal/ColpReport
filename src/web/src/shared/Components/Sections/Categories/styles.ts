import styled from "styled-components";
import { CategoryBoxProps } from "../../../Interfaces/CategoryBoxProps";

export const Container = styled.div``;

export const SelectionBoxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 14px;
    margin-top: 14px;
`;

export const SelectionBox = styled.button<CategoryBoxProps>`
    background: #FFFFFF;
    width: 160px;
    height: 40px;
    border: ${(props) => (props.selected ? '1px solid var(--primary-v3)' : '1px solid var(--gray-v2)')};
    border-radius: 5px;
    font: 400 14px 'Roboto';
    color: ${(props) => (props.selected ? 'var(--primary-v3)' : 'var(--dark-v2)')};
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    cursor: pointer;
`;