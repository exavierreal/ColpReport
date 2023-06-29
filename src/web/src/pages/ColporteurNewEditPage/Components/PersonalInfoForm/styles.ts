import styled from "styled-components";

export const Container = styled.div`
    margin: 36px 0;
`;

export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Inputs = styled.div`
    display: grid;

    &.one-by-two {
        grid-template-columns: 25% 70%;
        gap: 5%;
    }

    &.two-by-one {
        grid-template-columns: 70% 25%;
        gap: 5%;
    }
    
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 14px;
`;

export const Label = styled.label`
    font: 400 14px 'Roboto';
    color: var(--dark-v2);
    margin-left: 5px;
`;

export const Textbox = styled.input`
    margin-top: 5px;
    border: 1px solid var(--gray-v2);
    height: 40px;
    border-radius: 5px;
    padding: 12px;
    font: 400 14px 'Roboto';
    color: var(--dark-v1);
    letter-spacing: 0.04em;
    transition: 0.3 ease;

    &:focus {
        border: 2px solid var(--primary-v3);
    }
`;
