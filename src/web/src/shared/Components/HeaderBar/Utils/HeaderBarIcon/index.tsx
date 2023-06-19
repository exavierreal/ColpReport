import { Icon } from "@iconify-icon/react";
import './styles.css';
import { Link } from "react-router-dom";

interface HeaderBarIconProps {
    icon?: string;
    handleClick: (userHasBack: boolean, userHasClose?: boolean) => void;
}

export function HeaderBarIcon (props: HeaderBarIconProps) {
    switch(props.icon) {
        case 'close':
            return (
                <Icon icon="akar-icons:cross" width="30" className="icon" onClick={() => props.handleClick(false, true)} />
            )
        case 'back':
            return <Icon onClick={() => props.handleClick(true)} icon="akar-icons:arrow-left" width="30" className="icon" />
        case 'next':
            return <Icon onClick={() => props.handleClick(false)} icon="akar-icons:arrow-right" width="30" className="icon" />
        default:
            return <i className="empty"></i>
    }
}