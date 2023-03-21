import styled from "styled-components"
import { device } from "../../../../global/device";

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

    @media(${device.laptop}) {
        margin: 2.5rem 0 0 2.5rem;
    }
`;

export const Logo = styled.div`
    @media(${device.laptop}) {
        width: 100%;
    }
    
    img {
        width: 6.6875rem;
        height: 2.6875rem;

        @media(${device.laptop}) {
            width: 9.375rem;
            height: 5.3569rem;
        }
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        width: 12rem;
        height: 12rem;
        margin-top: 0.9375rem;

        @media(${device.laptop}) {
            width: 15.625rem;
            height: 15.625rem;
        }

        @media(${device.laptop}) {
            width: 18.75rem;
            height: 18.75rem;
        }
    }

    @media(${device.laptop}) {
        flex-direction: row-reverse;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(${device.laptop}) {
        align-items: baseline;
    }
    
    h1 {
        font: 700 1.375rem Poppins;
        color: var(--dark-v1);
        margin-top: 0.9375rem;

        @media(${device.desktop}) {
            font-size: 1.625rem;
        }
    }

    p {
        display: none;

        @media(${device.laptop}) {
            display: block;
            font: 300 1rem Poppins;
        }

        @media (${device.desktop}) {
            font-size: 1.125rem;
        }
    }

    ul {
        display: flex;
        list-style-type: none;

        li {
            background: var(--dark-v1);
            width: 2.1094rem;
            height: 2.1094rem;
            border-radius: 50%;
            margin-top: 0.9375rem;

            @media (${device.desktop}) {
                width: 2.5rem;
                height: 2.5rem;
                margin-top: 1.25rem;
            }

            &:nth-child(2) {
                margin: 0.9375rem 1.055rem 0 1.055rem;

                @media (${device.desktop}) {
                    margin-top: 1.25rem;
                }
            }

            .icons {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: #FFFFFF;
            }
        }
    }
`;