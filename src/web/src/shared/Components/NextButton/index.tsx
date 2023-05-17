import { Icon } from "@iconify-icon/react";
import { Button } from "./styles";

interface NextButtonProps {
    text: string;
    handlePageWizard: (a: boolean) => void;
}

export function NextButton(props: NextButtonProps) {
    return (
        <Button onClick={() => props.handlePageWizard(false)}>
            <Icon icon="akar-icons:arrow-right" width="20" />
            <p>{ props.text }</p>
        </Button>
    )
}