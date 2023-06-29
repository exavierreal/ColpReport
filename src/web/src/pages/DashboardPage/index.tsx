import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { GoalBox } from "./Components/GoalBox";
import { ValuesBox } from "./Components/ValuesBox";
import { Container, Content } from "./styles";

export function DashboardPage() {
    function handleProfileClick() {
        console.log("profile");
    }
    
    return (
        <Container>
            <HeaderBar handleClick={handleProfileClick} title="Dashboard" leftIcon="profile" rightIcon="sign-out" />
            
            <Content>
                <GoalBox title="Meta do Colportor" />

                <ValuesBox type="balance" />
                <ValuesBox type="acquire" />
                <ValuesBox type="delivery" />
            </Content>

            <Menu />
        </Container>
    )
}