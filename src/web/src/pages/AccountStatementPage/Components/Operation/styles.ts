import styled from "styled-components";
import { OperationStyle } from "../../Utils/GetOperationType";

interface ContainerProps {
    isEven: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    display: grid;
    grid-template-columns: 10% 78% 12%;
    padding: 30px 30px 30px 35px;
    background: ${(props) => (props.isEven ? '' : 'var(--gray-light-v3)' )}
`;

export const TypeIcon = styled.div<OperationStyle>`
    display: flex;
    align-items: center;
    justify-content: center;

    .type-icon {
        color: ${(props) => props.color};
    }
`;

export const Informations = styled.div`
    padding-left: 20px;
`;

export const Type = styled.h1`
    font: 700 12px 'Roboto';
    color: var(--dark-v1);
`;

export const Description = styled.h2`
    font: 300 18px 'Roboto';
    color: var(--dark-v1);
    margin-top: 4px;
    max-width: 246px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Value = styled.h3<OperationStyle>`
    font: 400 18px 'Ubuntu';
    color:  ${(props) => props.color};
    margin-top: 4px;
`;

export const RegisterDate = styled.div``;

export const DateValue = styled.span`
    font: 500 12px 'Roboto';
    color: var(--gray-v1);
`;
