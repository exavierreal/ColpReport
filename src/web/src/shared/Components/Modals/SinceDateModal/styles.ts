import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: var(--overlay);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background: #FFFFFF;
    box-shadow: 0 0 20px 5px rgba(36, 50, 84, .54);
    border-radius: 10px;
    padding: 48px;
    position: relative;
    width: 306px;

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

export const DateField = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const DateInput = styled.input`
    width: 164px;
    border: 1px solid var(--dark-v2);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    font: 400 16px 'Roboto';

    &:focus {
        border: 2px solid var(--primary-v2);
    }
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