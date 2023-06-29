import styled from "styled-components";
import { ParamsProps } from "../../Interfaces/ParamsProps";

export const GoalField = styled.div`
    margin: 36px 0 8px 0;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Label = styled.span`
    position: absolute;
    left: 12px;
    font: 400 16px 'Roboto';
    color: var(--dark-v1);
`;

export const GoalInput = styled.input<ParamsProps>`
    border: 1px solid var(--dark-v2);
    padding: 13px 10px 13px;
    text-align: center;
    color: var(--dark-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    border-radius: 5px;
    transition: 0.3 ease;

    &:focus {
        border: 2px solid ${props => props.movementSelected == 1 ? 'var(--success-v1)' : 'var(--danger-v1)'};
    }
`;

export const ArrowsButton = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: var(--dark-v2);
`;