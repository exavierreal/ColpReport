import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
    height: calc(100vh - 97px);
    margin-top: 97px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;

    img {
        width: 346px;
    }

    h1 {
        margin-top: 32px;
        font: 700 26px 'Poppins';
        color: var(--dark-v1);
        text-transform: uppercase;
    }

    h3 {
        margin-top: 8px;
        font: 300 20px 'Poppins';
        color: var(--dark-v1);
        width: 212px;
    }
`;

