import { useRef, useState } from "react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { SearchInput } from "../../shared/Components/Inputs/SearchInput";
import { Menu } from "../../shared/Components/Menu";
import { Movement } from "./Components/Movement";
import { MovementType } from "./Components/MovementType";
import { Container, Content, Input, MovementSection, Search } from "./styles";
import { FormMovement } from "./Components/FormMovement";
import { InputValue } from "./Components/InputValue";
import { ActionButtons } from "../../shared/Components/Buttons/ActionButtons";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../shared/Components/Modals/CancelModal";

export function OperationPage() {
    const navigate = useNavigate();
    
    const [movementSelected, setMovementSelected] = useState<number | null>(null);
    const [movementTypeSelected, setMovementTypeSelected] = useState<number | null>(null);
    const [formMovementSelected, setFormMovementSelected] = useState<number | null>(null);

    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [isOperationSaved, setIsOperationSaved] = useState(false);
    
    function handleProfileClick() {
        console.log("profile");
    }

    function handleCancel (choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/colporteurs");
    }

    function handleSubmit() {
        console.log("Salvei")
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

                <Input>
                    { formMovementSelected && <InputValue movementSelected={movementSelected} />}
                </Input>

                {formMovementSelected && <ActionButtons onCancel={handleCancel} onSave={handleSubmit} saveDisabled={!isOperationSaved} /> }
            </Content>

            <Menu />

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>
    )
}