import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    div {
        &:first-child {
            margin-right: 5px;
        }

        &:last-child {
            margin-left: 5px;
        }
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    font: 400 10px 'Roboto';
    position: relative;
    width: 100%;
    height: 45px;
    overflow: hidden;

    .visible-icon {
        position: absolute;
        color: var(--gray-v1);
        right: 0;
        bottom: 5px;
        cursor: pointer;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const Input = styled.input`
    width: 85%;
    height: 100%;
    color: var(--dark-v1);
    font-size: 10px;
    padding-top: 20px;
    border: none;
    outline: none;
    letter-spacing: 0.5px;

    &[type=password] {
        font-size: 10px;
        letter-spacing: 2px;
    }

    &:focus + label span, &:not(:placeholder-shown) + label span {
        transform: translateY(-130%);
        font-size: 10px;
        color: var(--primary-v1);
    }

    &:focus + label::after, &:not(:placeholder-shown) + label::after {
        transform: translateX(0%);
    }

    &::placeholder {
        color: rgba(255, 255, 255, .1);

    }
`;

export const Label = styled.label`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    margin-right: -10px;
    border-bottom: 1px solid var(--gray-v2);
    color: var(--gray-v2);

    &::after {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid var(--primary-v1);
        transform: translateX(-100%);
        transition: all 0.3s ease;
    }
`;

export const ContentLabel = styled.span`
    position: absolute;
    bottom: 20%;
    left: 0;
    transition: all 0.3s ease;
`;

export const Buttons = styled.div`
    margin-top: 20px;
    width: 100%;
`;

export const SaveButton = styled.button`
    width: 100%;
    height: 30px;
    background: var(--primary-v2);
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font: 500 10px 'Roboto';
    transition: 0.3 ease;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OrDivision = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;

  p {
    font: 300 12px 'Roboto';
    color: var(--dark-v1);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

export const Line = styled.span`
  width: 45%;
  border-bottom: 1px solid var(--dark-v2);
  position: relative;
  bottom: 8px;
  margin: 0 6.5px;
`;

export const GoogleButton = styled.button`
    width: 100%;
    height: 30px;
    background: var(--light-v1);
    border: 1px solid var(--gray-v1);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font: 500 10px 'Roboto';
    color: var(--dark-v2);
`;

export const GoogleIcon = styled.img`
    margin-right: 5px;
`;

export const ErrorNotifications = styled.p`
    display: none;
    list-style: none;


    &.error-notifications {
        display: block;
        width: 100%;
        text-align: left;
        list-style: inherit;
        margin-top: 9px;

        li {
            color: var(--danger-v1);
            font: 500 0.625rem 'Roboto';
        }
    }
`;