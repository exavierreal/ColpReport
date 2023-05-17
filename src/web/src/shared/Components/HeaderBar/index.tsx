import { Container } from "./styles";
import { HeaderBarIcon } from "./Utils/HeaderBarIcon";

interface HeaderBarProps {
    title: string;
    leftIcon?: string;
    rightIcon?: string;
    handleClick: (userHasBack: boolean) => void;
}

export function HeaderBar(props: HeaderBarProps) {
    return (
        <Container>
            <HeaderBarIcon handleClick={props.handleClick} icon={props.leftIcon} />
            <h1>{ props.title }</h1>
            <HeaderBarIcon handleClick={props.handleClick} icon={props.rightIcon} />
        </Container>
    );
}