import { Icon } from "@iconify-icon/react";
import { Container, Search } from "./styles";

export function SearchInput() {
    return (
        <Container>
            <Icon icon="akar-icons:search" width="20" className="icon-search" />
            <Search type="text" placeholder="Procurar por colportor" />
        </Container>
    )
}
