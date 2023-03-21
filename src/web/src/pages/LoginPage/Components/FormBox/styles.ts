import styled from 'styled-components';
import { device } from '../../../../global/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.8906rem 2.5rem;
  background: var(--light-v1);
  box-shadow: 0 0 20px 3px rgba(137, 144,163, 0.2);
  border-radius: 10px;
  padding: 30px 37px;

  @media(${device.laptop}) {
    margin: 0 30px 30px 16px;
  }

  @media(${device.desktop}) {
    margin: 0 43px 43px 32px;
  }

  &.login-width {
    width: calc(97%);

    @media(${device.laptop}) {
        width: calc(56%);
    }

    @media(${device.desktop}) {
      width: calc(36%);
    }
  }

  &.register-width {
    width: calc(100% - 5rem);

    @media(${device.laptop}) {
      width: calc(63% - 5rem);
    }

    @media(${device.desktop}) {
      width: calc(43% - 5rem);
    }
  }
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

