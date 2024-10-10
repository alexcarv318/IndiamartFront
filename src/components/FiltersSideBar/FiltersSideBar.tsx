import styles from "./FiltersSideBar.module.scss"
import {Button} from "@mui/joy";
import IndiamartFilters from "../FilterGroups/IndiamartFilters.tsx";
import NextdoorFilters from "../FilterGroups/NextdoorFilters.tsx";
import BuildzoomFilters from "../FilterGroups/BuildzoomFilters.tsx";
import AmexFilters from "../FilterGroups/AmexFilters.tsx";

type FiltersSideBarProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    isOpen: boolean;
    setData: (data: any) => void;
    setRowsAffected: (rowsAffected: number) => void;
    setIsFilterSidebarOpen: (isOpen: boolean) => void;
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

            {props.page === "indiamart" &&
                (<IndiamartFilters setRowsAffected={props.setRowsAffected} setProducts={props.setData} />)}
            {props.page === "nextdoor" &&
                (<NextdoorFilters setRowsAffected={props.setRowsAffected} setContractors={props.setData} />)}
            {props.page === "buildzoom" &&
                (<BuildzoomFilters setRowsAffected={props.setRowsAffected} setContractors={props.setData} />)}
            {props.page === "amex" &&
                (<AmexFilters setRowsAffected={props.setRowsAffected} setContractors={props.setData} />)}
        </div>
    )
}

export default FiltersSideBar;