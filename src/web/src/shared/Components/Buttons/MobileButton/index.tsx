import { Icon } from "@iconify-icon/react";
import './styles.css';

interface MobileButtonProps {
    type: string;
}

export function MobileButton(props: MobileButtonProps) {
    switch(props.type) {
        case 'cancel':
            return (
                <button className="cancel">
                    <Icon icon="akar-icons:cross" width="20" />
                    <p>Cancelar</p>
                </button>
            );
        case 'save':
            return(
                <button className="save">
                    <Icon icon="akar-icons:double-check" width="20" />
                    <p>Salvar</p>
                </button>
            )
        default:
            return null;
    }
}