import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 5rem);
  margin: 1.8906rem 0;
  background: var(--light-v1);
  box-shadow: 0 0 20px 3px rgba(137, 144,163, 0.2);
  border-radius: 10px;
  padding: 30px 37px;
`;

export const Tabs = styled.div`
    display: flex;
    background: var(--primary-light-v1);
    width: 11.875rem;
    height: 1.875rem;
    border-radius: 20px;
    margin-bottom: 0.625rem;
`;

export const Tab = styled.span`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 400 0.75rem Roboto;
    color: var(--dark-v1);
    transition: 0.3s ease;
    cursor: pointer;

    &.active {
        background: var(--primary-v1);
        color: #FFFFFF;
        font: 500 0.75rem Roboto;

        &:first-child {
            border-radius: 20px 0 0 20px;
        }

        &:last-child {
            border-radius: 0 20px 20px 0;
        } 
    }
`;

export const TabPanel = styled.div`
    width: 100%;
`;

export const Rectangle = styled.div`
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 51vh;
    bottom: 430px;
    z-index: -1;

    &.custom-box {
        bottom: 381px;
    }
`;

export const Box = styled.div`
    width: 657px;
    height: 657px;
    transform: rotate(-46.69deg);
    background: var(--primary-light-v1);
    border-radius: 20px;
    z-index: -1;
    position: absolute;
    top: 140px;
    left: 105px;
`;