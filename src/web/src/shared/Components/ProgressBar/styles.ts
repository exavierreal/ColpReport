import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    i {
        background: var(--gray-light-v2);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin-right: 12px;

        &.active {
            background: var(--primary-v2);
            width: 14px;
            height: 14px;
        }
    }
`;