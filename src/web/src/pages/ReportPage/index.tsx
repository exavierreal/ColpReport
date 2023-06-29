import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { Container } from "./styles";

export function ReportPage() {
    function handleProfileClick() {
        console.log("profile");
    }
    
    return (
        <Container>
            <HeaderBar handleClick={handleProfileClick} title="Relatórios" leftIcon="back" rightIcon="search" />


            <Menu />
        </Container>
    )
}