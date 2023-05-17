import { MobileButton } from "../MobileButton";
import { Container } from "./styles";

export function ActionButtons() {
    return (
        <Container>
            <MobileButton type="cancel" />
            <MobileButton type="save" />
        </Container>
    );
}