import styled from "styled-components"
import { device } from "../../global/device"

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const SignInBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

    @media (${device.laptop}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        background: var(--light-v1);
        box-shadow: 0 0 20px 3px rgba(137, 144, 163, 0.2);
        margin: 0 2.5rem;
    }

    @media (${device.desktop}) {
        margin: 0 9.375rem;
    }
`
export const GreenRectangle = styled.div`
    display: none;

    @media (${device.laptop}) {
        display: block;
        width: 548px;
        height: 548px;
        overflow: hidden;
        position: fixed;
        transform: rotate(-46.69deg);
        background: #C2F3BA;
        z-index: -1;
        border-radius: 20px;
        top: -19em;
        left: -8em;
    }

    @media (${device.laptop}) {
        width: 41.1875rem;
        height: 41.1875rem;
        top: -23em;
        left: -4em;
    }
`;

export const BlueRectangle = styled.div`
    position: fixed;
    overflow: hidden;
    width: 548px;
    height: 548px;
    z-index: -1;
    background: var(--primary-light-v1);
    bottom: -16em;
    right: -11em;
    transform: rotate(-46.69deg);
    border-radius: 20px;

    @media (${device.laptop}) {
        bottom: -13em;
        right: -24em;
    }

    @media (${device.laptop}) {
        width: 31.125rem;
        height: 31.125rem;
        bottom: -12em;
        right: -16em;
    }
`;
