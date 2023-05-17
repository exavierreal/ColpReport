import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 97px;
`;

export const TeamFormBox = styled.div`
    margin: 40px 0 6px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 80px);
    padding: 0 20px 22px;

    background: var(--light-v1);
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    border-radius: 10px;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 45px;

    input {
        display: none;
    }
`;

export const MainImage = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 154px;
    height: 154px;
    border-radius: 50%;
    border: 6px solid #FFFFFF;
    background: var(--light-v2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, .25);

    .user-icon {
        color: var(--gray-v1);
    }
`;

export const CameraIcon = styled.button`
    background: var(--dark-v2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    position: relative;
    bottom: 40px;
    left: 40px;
    color: #FFFFFF;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .25);

    input {
        display: none;
    }
`;

export const Subheading = styled.p`
    font: 300 20px 'Poppins';
    color: var(--dark-v1);
    width: 150px;
    position: relative;
    bottom: 25px;

    em {
        font-weight: 700;
    }
`;

export const Form = styled.div`
    width: 100%;
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;

    label {
        width: 100%;
        font: 400 16px 'Roboto';
        color: var(--dark-v2);
        margin: 0 0 8px 8px;
    }

    input {
        height: 40px;
        border-radius: 5px;
        border: 1px solid var(--gray-v2);
        box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
        padding: 0 13px;
        font: 400 14px 'Roboto';
        color: var(--dark-v1);
        transition: 0.1s ease;

        &:focus {
            border: 2px solid var(--primary-v3);
        }
    }

    &:last-child {
        margin-bottom: 28px;
    }
`;

export const GoalButton = styled.button`
    background: var(--dark-v2);
    width: 170px;
    height: 30px;
    border-radius: 25px;
    font: 500 14px 'Roboto';
    color: #FFFFFF;
    margin-bottom: 28px;
    cursor: pointer;
`;