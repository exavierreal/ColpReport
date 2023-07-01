import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
    margin: 137px 36px 97px 36px;
`;

export const ColporteurList = styled.div``;

export const ColporteurSection = styled.div`
    width: 342px;
    height: 90px;
    border-bottom: 1px solid var(--gray-v1);
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    transition: 0.3s ease;

    &:hover {
        box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    }
`;

export const ColporteurImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    background-color: var(--light-v2);;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid var(--gray-v2);
    }
`;

export const ColporteurInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 12px;
`;

export const ColporteurName = styled.h1`
    font: 500 18px 'Poppins';
    color: var(--dark-v1);
`;

export const ColporteurEmail = styled.p`
    font: 300 14px 'Roboto';
    color: var(--dark-v2);
`;

export const ColporteurCategories = styled.ul`
    display: flex;
`;

export const NextIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    .next-icon {
        color: var(--gray-v1);
    }
`;
