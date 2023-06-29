import { useState } from "react";
import { FormMovementMock } from "../../../../mock/Movement/FormMovementMock";
import { SelectInput } from "../../../../shared/Components/SelectInput";
import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { ParamsProps } from "../../Interfaces/ParamsProps";
import { Inputs } from "../../shared/Inputs/styles";
import { Container } from "./styles";

export function FormMovement ({ movementTypeSelected, setFormMovementSelected }: ParamsProps) {
    const formMovements = FormMovementMock;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
    const filteredFormMovements = formMovements.filter(
        (type) => type.movementTypeId === movementTypeSelected
    );

    function handleSelectInput(index: number, id: number) {
        setActiveIndex(index);
        setFormMovementSelected!(id);
    }

    return (
        <Container>
            <Subtitle title="Formas de Movimentação" />
            
            <Inputs>
                {filteredFormMovements.map((type, index) => (
                    <SelectInput
                        key={index}
                        text={type.name}
                        selectedColor={"var(--warning-v1)"}
                        isActive={index === activeIndex}
                        onClick={() => handleSelectInput(index, type.id)} />
                ))}
            </Inputs>
        </Container>
    );
}