import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    height: calc(100vh - 97px);
    margin-top: 97px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 32px;
        font: 700 26px 'Poppins';
        text-transform: uppercase;
        color: var(--dark-v1);
    }

    h3 {
        font: 300 20px 'Poppins';
        text-align: center;
        width: 236px;
    }
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 64px;
`;