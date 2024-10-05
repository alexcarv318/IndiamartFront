import styles from "./FiltersSideBar.module.scss"
import InputFilter from "../FilterComponents/InputFilter.tsx";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {Button} from "@mui/joy";

type FiltersSideBarProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    setIsFilterSidebarOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

const FiltersSideBar = (props: FiltersSideBarProps) => {

    return (
        <div
            style={props.isOpen ? {width: "30%", opacity: 1} : {}}
            className={styles.filtersContainer}
        >
            <div className={styles.closeSidebarContainer}>
                <Button onClick={() => props.setIsFilterSidebarOpen(false)}>X</Button>
            </div>

            <InputFilter
                placeholder={"Name"}
            />

            <AutocompleteFilter
                placeholder={"Name"}
                options={["A", "B", "C"]}
            />
        </div>
    )
}

export default FiltersSideBar;