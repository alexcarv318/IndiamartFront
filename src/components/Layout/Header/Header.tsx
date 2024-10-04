import styles from './Header.module.scss'
import MenuIcon from "../../MenuIcon/MenuIcon.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <MenuIcon />
        </header>
    )
}

export default Header;