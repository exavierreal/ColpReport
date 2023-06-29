import { DefineCategory } from "../../../DashboardPage/Utils/DefineCategory";
import { CategoryProps } from "../../Interfaces/CategoryProps";
import { CategoryOption } from "./styles";

export function Category(props: CategoryProps) {
    const styleValues = DefineCategory(props.type);
    
    return (
        <CategoryOption background={styleValues!.background} color={styleValues!.color} textShadow={styleValues!.textShadow}>
            {props.type}
        </CategoryOption>
    )
}