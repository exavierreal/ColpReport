import styled from "styled-components";

export const Button = styled.button`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 40px;
    background: var(--primary-v2);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font: 500 14px 'Roboto';
    color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 3px rgba(137, 144, 163, 0.2);

    p {
        margin-left: 12px;
    }
`;