import { Icon } from "@iconify-icon/react";
import { MobileButtonProps } from "../../../Interfaces/MobileButtonProps";
import './styles.css';

export function MobileButton(props: MobileButtonProps) {
    switch(props.type) {
        case 'cancel':
            return (
                <button className="cancel" onClick={props.handleClick}>
                    <Icon icon="akar-icons:cross" width="20" />
                    <p>Cancelar</p>
                </button>
            );
        case 'save':
            return(
                <button type="submit" className="save" onClick={props.handleClick}>
                    <Icon icon="akar-icons:double-check" width="20" />
                    <p>Salvar</p>
                </button>
            )
        default:
            return null;
    }
}