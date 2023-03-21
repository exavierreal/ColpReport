import styled from "styled-components";

export const LoadingOverlay = styled.div`
    background-color: rgba(36, 50, 84, 0.75);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2 ease;
`;

export const Circle = styled.i`
    position: absolute;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 4px solid var(--gray-v2);
    z-index: 2;
`;

export const CircleLoading = styled.i`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 6px solid var(--primary-v2);
    z-index: 3;
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 25%, 75% 50%, 50% 75%);
    
    animation: spin 1.5s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

