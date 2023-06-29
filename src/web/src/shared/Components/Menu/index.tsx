import { Link, useLocation } from "react-router-dom";
import { Container, MenuBar, Option } from "./styles";
import { menuItems } from "./Utils/MenuItem";
import { Icon } from "@iconify-icon/react";

export function Menu() {
    const location = useLocation();
    
    return (
        <Container>
            <MenuBar>
                { menuItems.map((item, index) => {
                    const isSelected = item.path.includes(location.pathname);
                    return (
                        <Option key={index} active={isSelected}>
                            <Link to={item.path[0]}>
                                <Icon icon={item.icon} width="30" className="icon" />
                            </Link>
                        </Option>
                    );
                })}
            </MenuBar>
        </Container>
    )
}