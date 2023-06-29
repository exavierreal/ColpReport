import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: var(--overlay);
    z-index: 9999;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--light-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163 .2);
    border-radius: 10px;
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AlertImg = styled.img`
    width: 100px;
`;

export const Title = styled.h1`
    margin-top: 8px;
    font: 600 24px 'Poppins';
    color: var(--danger-v1);

`;

export const Message = styled.p`
    width: 200px;
    margin-top: 4px;
    text-align: center;
    font: 300 16px 'Roboto';
    color: var(--danger-v1);
`

export const Buttons = styled.div`
    display: flex;
    margin-top: 32px;
`;

export const YesButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 36px;
    margin-right: 12px;
    border-radius: 5px;
    font: 400 16px 'Roboto';
    color: #FFFFFF;
    background: var(--danger-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);

    p {
        margin-left: 8px;
        text-transform: uppercase;
    }
`;

export const NoButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 36px;
    border-radius: 5px;
    font: 500 16px 'Roboto';
    color: var(--danger-v1);
    background: none;
    border: 1px solid var(--danger-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);

    p {
        margin-left: 8px;
        text-transform: uppercase;
    }
`;