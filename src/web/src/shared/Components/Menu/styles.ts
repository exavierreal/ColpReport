import styled from "styled-components";

export const Container = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 72px;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .25);
    z-index: 99;
`;

export const MenuBar = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;

`;

export const Option = styled.li<{ active: boolean }>`
    height: 100%;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: ${props => props.active ? '2px solid var(--primary-v3)': ''};
    transition: ease 0.3s;

    a .icon {
        color:  ${props => props.active ? 'var(--primary-v3)' : 'var(--gray-v1)' };
    }
`;