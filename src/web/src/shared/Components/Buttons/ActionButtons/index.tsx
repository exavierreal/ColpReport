import { ActionButtonProps } from "../../../Interfaces/ActionButtonsProps";
import { MobileButton } from "../MobileButton";
import { Container } from "./styles";

export function ActionButtons({ onCancel, onSave, saveDisabled }: ActionButtonProps) {
    return (
        <Container>
            <MobileButton type="cancel" handleClick={onCancel} />
            <MobileButton type="save" handleClick={onSave} disabled={saveDisabled} />
        </Container>
    );
}