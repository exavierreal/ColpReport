import { Button } from "./styles";

interface DefineButtonProps {
    text: string;
    onClick?: () => void
}

export function DefineButtonMob({text, onClick: handleClick}: DefineButtonProps) {
    return (
        <Button onClick={handleClick}>{ text }</Button>
    )
}