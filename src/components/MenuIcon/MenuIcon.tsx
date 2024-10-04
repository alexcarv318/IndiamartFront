import {Dropdown, Menu, MenuButton, MenuItem} from "@mui/joy";
import {Link} from "react-router-dom";

const MenuIcon = () => {
    return (
        <Dropdown>
            <MenuButton variant="soft" size="md">
                Menu
            </MenuButton>
            <Menu variant="plain" color="primary" size="lg">
                <MenuItem><Link to={"/indiamart"}>Indiamart</Link></MenuItem>
                <MenuItem><Link to={"/nextdoor"}>Nextdoor</Link></MenuItem>
                <MenuItem><Link to={"/buildzoom"}>Buildzoom</Link></MenuItem>
                <MenuItem><Link to={"/amex"}>Amex</Link></MenuItem>
            </Menu>
        </Dropdown>
    )
}

export default MenuIcon