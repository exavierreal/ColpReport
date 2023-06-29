import { useEffect, useState } from "react";
import { MovementTypeMock } from "../../../../mock/Movement/MovementTypeMock";
import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { Container } from "./styles";
import { Inputs } from "../../shared/Inputs/styles";
import { SelectInput } from "../../../../shared/Components/SelectInput";
import { ParamsProps } from "../../Interfaces/ParamsProps";

export function MovementType({movementSelected, setMovementTypeSelected}: ParamsProps) {
    const movementTypes = MovementTypeMock;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const filteredMovementTypes = movementTypes.filter(
        (type) => type.movementId === movementSelected
    );


    function handleSelectInput(index: number, id: number) {
        setActiveIndex(index);
        setMovementTypeSelected!(id);
    }

    return (
        <Container>
            <Subtitle title="Tipo de Movimentação" />
            
            <Inputs>
                {filteredMovementTypes.map((type, index) => (
                    <SelectInput
                        key={index}
                        text={type.name}
                        selectedColor={ "var(--primary-v3)" }
                        isActive={index === activeIndex}
                        onClick={() => handleSelectInput(index, type.id)} />
                ))}
            </Inputs>
        </Container>
    )
}