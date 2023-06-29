import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
    background: var(--light-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    padding-bottom: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`;

export const SinceDate = styled.h1`
    font: 700 22px 'Roboto';
    color: var(--dark-v1);
`;

export const Stars = styled.div`
    margin: 12px 0;
    
    .star-date-icons {
        color: var(--warning-v1);
    }
`;

export const HalfStar = styled.img``;

export const FullStar = styled.img``;
