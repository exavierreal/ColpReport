import styled from "styled-components";

export const Container = styled.div`
    width: 322px;
    background: var(--light-v1);
    border-radius: 10px;
    box-shadow: 0 0 20px 3px rgba(137,144,163, .2);
    margin-bottom: 32px;
`;

export const GoalHeading = styled.div`
    margin: 20px;
    font: 400 12px 'Roboto';
    text-transform: uppercase;
    letter-spacing: 0.96px;
    color: var(--gray-v1);
`;

export const SliderImage = styled.div`
       
`;

export const Slider = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: var(--gray-v2);
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--primary-v3);
        cursor: pointer;
    }
`;

export const Picture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const MainImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 154px;
    border-radius: 50%;
    border: 6px solid #FFFFFF;
    background: var(--light-v2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, .25);
    cursor: pointer;
    margin-top: 10px;

    .user-icon {
        color: var(--gray-v1);
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid var(--gray-v2);
    }
`;

export const GoalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SelectedName = styled.div`
    margin-top: 24px;
    font: 700 22px 'Roboto';
    color: var(--dark-v1);
`;

export const SelectedCategory = styled.div`
    margin-top: 8px;
    font: 400 12px 'Roboto';
    color: var(--gray-v1);
    letter-spacing: 0.36px;

    span {
        text-transform: uppercase;
    }
`;

export const ActionButtons = styled.div`
    margin-top: 16px;
    display: flex;
`;

export const OperationButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #FFFFFF;

    &:first-child {
        background: var(--success-v1);
    }

    &:nth-child(2) {
        margin: 0 20px;
        background: var(--warning-v1);
    }

    &:nth-child(3) {
        background: var(--danger-v1);
    }
`;

export const GoalButton = styled.div`
    margin: 16px 0 30px 0;
    background-color: var(--primary-v2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 170px;
    border-radius: 25px;
    cursor: pointer;

    font: 500 14px 'Roboto';
    color: #FFFFFF;
`;

export const GoalLabel = styled.div`
    display: none;
`;
