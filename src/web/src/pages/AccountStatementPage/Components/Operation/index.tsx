import { Icon } from "@iconify-icon/react";
import { Container, DateValue, Description, Informations, RegisterDate, Type, TypeIcon, Value } from "./styles";
import { OperationModel } from "../../../../shared/Models/Operation.model";
import { getOperationStyle } from "../../Utils/GetOperationType";
import { FormatMoneyValue } from "../../../../shared/Utils/FormatMoneyValue";
import { FormatDateStatement } from "../../../../shared/Utils/FormatDateStatement";

interface OperationProps {
    index: number;
    operation: OperationModel;
}

export function Operation({index, operation: operationModel}: OperationProps) {
    const isEven = index % 2 === 0;
    const operationStyle = getOperationStyle(operationModel.operationTypeId)
    
    return (
        <Container isEven={isEven}>
            <TypeIcon color={operationStyle.color}>
                <Icon icon={operationStyle.icon!} width="30" className="type-icon" />
            </TypeIcon>

            <Informations>
                <Type>{operationModel.type}</Type>
                <Description>{operationModel.description}</Description>
                <Value color={operationStyle.color}>{FormatMoneyValue(operationModel.value.toString())}</Value>
            </Informations>

            <RegisterDate>
                <DateValue>{FormatDateStatement(operationModel.registerDate)}</DateValue>
            </RegisterDate>
        </Container>
    );
}