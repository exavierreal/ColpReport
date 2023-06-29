import { OperationsMock } from "../../mock/OperationsMock";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { SearchInput } from "../../shared/Components/Inputs/SearchInput";
import { Menu } from "../../shared/Components/Menu";
import { Operation } from "./Components/Operation";
import { Container, Content, Search, Statement } from "./styles";

export function AccountStatementPage() {
    const operationsMock = OperationsMock;
    
    function handleProfileClick() {
        console.log("voltei");
    }
    
    return (
        <Container>
            <HeaderBar handleClick={handleProfileClick} title="Extrato" leftIcon="back" rightIcon="statistic" />

            <Content>
                <Search>
                    <SearchInput />
                </Search>

                <Statement>
                    { operationsMock.map((operation, index) => (
                        <Operation key={index} index={index} operation={operation} />
                    )) }
                </Statement>
            </Content>

            <Menu />
        </Container>
    )
}