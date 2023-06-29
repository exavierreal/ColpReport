import { Icon } from "@iconify-icon/react";
import { NewButton } from "./styles";

interface NewButtonMobProps {
    onClick: () => void;
}

export function NewButtonMob({onClick: handleClick}: NewButtonMobProps) {
    return (
        <NewButton onClick={handleClick}>
            <Icon icon="akar-icons:plus" width="20" className="plus-icon" />
        </NewButton>
    );
}