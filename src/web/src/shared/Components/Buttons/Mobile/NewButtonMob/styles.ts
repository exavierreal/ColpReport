import styled from "styled-components";

export const NewButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 1px 4px 10px 0 rgba(0, 0, 0, .25);
    background: var(--primary-v2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 96px;
    right: 20px;
    cursor: pointer;

    .plus-icon {
        color: #FFFFFF;
    }
`;