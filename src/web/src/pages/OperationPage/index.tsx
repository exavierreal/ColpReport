import { useState } from "react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { SearchInput } from "../../shared/Components/Inputs/SearchInput";
import { Menu } from "../../shared/Components/Menu";
import { Movement } from "./Components/Movement";
import { MovementType } from "./Components/MovementType";
import { Container, Content, MovementSection, Search } from "./styles";
import { FormMovement } from "./Components/FormMovement";

export function OperationPage() {
    const [movementSelected, setMovementSelected] = useState<number | null>(null);
    const [movementTypeSelected, setMovementTypeSelected] = useState<number | null>(null);
    const [formMovementSelected, setFormMovementSelected] = useState<number | null>(null);
    
    function handleProfileClick() {
        console.log("profile");
    }
    
    return (
        <Container>
            <HeaderBar handleClick={handleProfileClick} title="Entrada e Saída" leftIcon="back" rightIcon="statistic" />

            <Content>
                <Search>
                    <SearchInput />
                </Search>

                <MovementSection>
                    <Movement setMovementSelected={setMovementSelected} />

                    { movementSelected && <MovementType movementSelected={movementSelected} setMovementTypeSelected={setMovementTypeSelected} /> }

                    { movementTypeSelected && <FormMovement movementTypeSelected={movementTypeSelected} setFormMovementSelected={setFormMovementSelected} /> }
                </MovementSection>
            </Content>

            <Menu />
        </Container>
    )
}