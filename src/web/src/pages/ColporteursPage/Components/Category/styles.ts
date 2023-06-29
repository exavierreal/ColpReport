import styled from "styled-components";
import { StyleCategoryProps } from "../../../DashboardPage/Utils/DefineCategory";

export const CategoryOption = styled.li<StyleCategoryProps>`
    list-style: none;
    height: 20px;
    width: 40px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font: 700 12px 'Roboto';
    background: ${props => props.background};
    text-shadow: 0 0 10 0 ${props => props.textShadow};
    color: ${props => props.color};

    &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;