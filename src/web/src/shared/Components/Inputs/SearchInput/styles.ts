import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    
    .icon-search {
        position: absolute;
        left: 10px;
        pointer-events: none;
        color: var(--gray-v1);
    }
`;

export const Search = styled.input`
    padding-left: 40px;
    height: 50px;
    width: calc(100vw - 72px);
    background: var(--gray-light-v3);
    border-radius: 10px;
    color: var(--dark-v1);
    font: 400 14px 'Roboto';
    letter-spacing: 0.04em;

    &::placeholder {
        transition: transform 0.2s ease-in-out;
        transform-origin: left;
        font: 400 14px 'Roboto';
        color: var(--gray-v1);
    }

    &:focus::placeholder {
        transform: translateX(-200%);
    }
`;


