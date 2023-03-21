import styled from "styled-components";
import { device } from "../../global/device";

export const Banner = styled.img`
    width: 17.1875rem;
    height: 17.1875rem;

    @media(${device.desktop}) {
        width: 25rem;
        height: 25rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(${device.laptop}) {
        flex-direction: row;
    }
`;

export const Heading = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;

    @media(${device.laptop}) {
        margin-top: 0;
        align-items: unset;
        justify-content: unset;
        text-align: inherit;
        width: 45%;
    }
    
    h1 {
        color: var(--dark-v1);
        font: 700 1.25rem 'Poppins';
        text-transform: uppercase;

        @media(${device.laptop}) {
            font-size: 24px;
        }

        @media(${device.desktop}) {
            font-size: 32px;
        }
    }

    p {
        font: 300 1rem 'Poppins';
        width: 70%;

        @media(${device.laptop}) {
            width: 80%;
            font-size: 18px;
        }

        @media(${device.desktop}) {
            font-size: 22px;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        width: 14rem;
        height: 2.25rem;
        border-radius: 5px;
        background-color: var(--primary-v2);
        box-shadow: 0px 0px 20px 3px rgba(137, 144, 163, 0.2);
        text-transform: uppercase;
        color: #FFFFFF;
        font: 500 0.75rem 'Roboto';
        cursor: pointer;
        letter-spacing: 0.04em;

        @media(${device.desktop}) {
            width: 260px;
            height: 40px;
            font-size: 14px;
        }

        .arrow-icon {
            margin-right: 12px;
        }
    }
`;

export const CloseIcon = styled.div`
    position: relative;
    height: 100%;

    .close-icon {
        position: absolute;
        top: 30px;
        right: -30px;
        color: var(--dark-v2);
        cursor: pointer;

        @media(${device.tablet}) {
            right: -80px;
        }

        @media(${device.laptop}) {
            right: 30px;
        }

        @media(${device.desktop}) {

        }
    }
`;