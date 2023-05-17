import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 26px 0 40px 0;
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 40px;
        border-radius: 5px;
        text-transform: uppercase;
        color: #FFFFFF;
        font: 500 14px 'Roboto';
        cursor: pointer;
        
        &:first-child {
            margin-right: 20px;
        }

        p {
            margin-left: 5px;
        }
    }
`;