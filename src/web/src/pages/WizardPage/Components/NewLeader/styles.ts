import styled from "styled-components";

export const Container = styled.div``;

export const CardBox = styled.div`
    margin: 28px 40px 0;
    border-radius: 10px;
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    background: var(--light-v1);

    &.mt-first {
        margin-top: 133px;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Picture = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;

    input {
        display: none;
    }
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

export const CameraIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    border: 4px solid #FFFFFF;
    background: var(--dark-v2);
    color: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .25);
    left: 45px;
    bottom: 45px;
    cursor: pointer;
`;

export const Subheading = styled.h3`
    text-align: center;
    font: 700 22px 'Roboto';
    color: var(--dark-v1);
    
    &.price {
        margin-top: -20px;
    }

    &.since-date {
        margin-top: 24px;
    }
`;

export const Button = styled.button`
    background: var(--primary-v2);
    color: #FFFFFF;
    font: 500 14px 'Roboto';
    margin: 20px 0 30px;
    width: 170px;
    height: 30px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, .25);
    //filter: drop-shadow(0 0 10px rgba(0, 0, 0, .25));
`;

export const Categories = styled.div`
    margin: 20px 40px 30px;
`;

export const CategoriesBoxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 14px;
    margin-top: 14px;
`;

export const CategoryBox = styled.input`
    background: #FFFFFF;
    width: 160px;
    height: 40px;
    border: 1px solid var(--gray-v2);
    border-radius: 5px;
    font: 400 14px 'Roboto';
    color: var(--dark-v2);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    cursor: pointer;
`;
