import styled from "styled-components"

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

    img {
        &:first-child {
            width: 6.6875rem;
            height: 2.6875rem;
        }

        &:nth-child(2) {
            width: 12rem;
            height: 12rem;
            margin-top: 0.9375rem;
        }
    }
    
    h1 {
        font: 700 1.375rem Poppins;
        color: var(--dark-v1);
        margin-top: 0.9375rem;
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

            &:nth-child(2) {
                margin: 0.9375rem 1.055rem 0 1.055rem;
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