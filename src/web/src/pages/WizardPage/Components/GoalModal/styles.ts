import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--overlay);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const Modal = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 24px 48px 32px;
    position: relative;

    .close-button {
        color: var(--dark-v2);
        position: absolute;
        top: 0;
        right: 0;
        margin: 30px 20px 0 0;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeadImage = styled.img``;

export const Heading = styled.div`
    text-align: center;
`;

export const Title = styled.h1`
    font: 700 26px 'Poppins';
    text-transform: uppercase;
    color: var(--dark-v1);
    margin-top: 24px;
`;

export const Subheading = styled.p`
    font: 300 20px 'Poppins';
    width: 170px;
`;

export const GoalField = styled.div`
    margin-top: 24px;
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

export const GoalInput = styled.input`
    border: 1px solid var(--dark-v2);
    padding: 13px 10px 13px;
    text-align: center;
    color: var(--dark-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    border-radius: 5px;
`;

export const ArrowsButton = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: var(--dark-v2);
`;

export const SaveButton = styled.button`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: var(--primary-v2);
    color: #FFFFFF;
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    cursor: pointer;

    p {
        font: 400 14px 'Roboto';
        text-transform: uppercase;
        margin-left: 5px;
    }
`;