import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    padding: 0 32px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .25);
    z-index: 1;

    h1 {
        font: 400 20px 'Roboto';
        color: var(--dark-v1);
    }
`;