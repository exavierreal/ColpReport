import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    width: 100vw;
    padding: 0 36px;
    margin-top: 121px;
`;

export const Form = styled.div`
    margin-bottom: 32px;
`;

export const Input = styled.div`
    margin-top: 14px;
    display: flex;
    flex-direction: column;

    label {
        font: 400 12px 'Roboto';
        color: var(--dark-v1);
        padding: 0 0 5px 7px;
    }

    input {
        border: 1px solid var(--gray-v2);
        box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
        height: 40px;
        border-radius: 5px;
        transition: 0.2s ease;
        padding-left: 13px;
        font-size: 12px;

        &:focus {
            border: 2px solid var(--primary-v3);
        }
    }
`;

export const Block = styled.div`
    width: 100%;
    display: grid;
    grid-column-gap: 5%;

    &#block-1 {
        grid-template-columns: 65% 30%;
    }

    &#block-2 {
        grid-template-columns: 30% 65%;
    }
    
`;
