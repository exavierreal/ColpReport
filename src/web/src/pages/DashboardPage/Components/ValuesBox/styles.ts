import styled from "styled-components";
import { BackgroundProps } from "../../Interfaces/BackgroundProps";

export const Container = styled.div<BackgroundProps>`
    margin-bottom: 20px;
    width: 322px;
    height: 130px;
    border-radius: 10px;
    background: ${props => props.background };
    box-shadow: 0 0 20px 3px rgba(137, 144, 163, .2);
    display: flex;
    align-items: center;
    position: relative;
`;

export const Content = styled.div`
    margin-left: 20px;
`;

export const Title = styled.h4`
    font: 400 15px 'Roboto';
    color: #FFFFFF;
`;

export const Value = styled.h1`
    margin-top: 4px;
    font: 700 32px 'Ubuntu';
    color: #FFFFFF;
`;

export const Total = styled.p`
    margin-top: 4px;
    font: 300 14px 'Roboto';
    color: #FFFFFF;
`;

export const PresentationIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .logo-icon {
        color: #FFFFFF;
    }
`;

export const Circle = styled.div<BackgroundProps>`
  width: 65px;
  height: 65px;
  border-radius: 0 0 0 100%;
  background: ${props => props.background};
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(0%, 0%) rotate(90deg);
  z-index: 1;
`;

export const CircleOpacity = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 0 0 0 100%;
  background: var(--light-v1);
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(20%, 20%) rotate(90deg);
  opacity: 0.38;
  z-index: 2;
`;