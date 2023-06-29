import { useState } from "react";
import { MovementMock } from "../../../../mock/Movement/MovementMock";
import { SelectInput } from "../../../../shared/Components/SelectInput";
import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { Container, Inputs } from "../../shared/Inputs/styles";
import { ParamsProps } from "../../Interfaces/ParamsProps";

export function Movement({ setMovementSelected }: ParamsProps) {
    const movements = MovementMock;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function handleSelectInput(index: number, id: number) {
        setActiveIndex(index);
        setMovementSelected!(id);
    }

    return (
        <Container>
            <Subtitle title="Movimentação" />
            
            <Inputs>
                {movements.map((movement, index) => (
                    <SelectInput
                        key={index}
                        text={movement.name}
                        selectedColor={movement.id === 1 ? "var(--success-v1)" :"var(--danger-v1)"}
                        isActive={index === activeIndex}
                        onClick={() => handleSelectInput(index, movement.id)} />
                ))}
            </Inputs>
        </Container>
    )
}