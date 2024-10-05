import styles from "./FiltersSideBar.module.scss"
import {Button} from "@mui/joy";
import IndiamartFilters from "../FilterGroups/IndiamartFilters.tsx";
import NextdoorFilters from "../FilterGroups/NextdoorFilters.tsx";
import BuildzoomFilters from "../FilterGroups/BuildzoomFilters.tsx";
import AmexFilters from "../FilterGroups/AmexFilters.tsx";

type FiltersSideBarProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    setData: (data: any) => void;
    isOpen: boolean;
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

            {props.page === "indiamart" && (<IndiamartFilters setProducts={props.setData} />)}
            {props.page === "nextdoor" && (<NextdoorFilters setContractors={props.setData} />)}
            {props.page === "buildzoom" && (<BuildzoomFilters setContractors={props.setData} />)}
            {props.page === "amex" && (<AmexFilters setContractors={props.setData} />)}
        </div>
    )
}

export default FiltersSideBar;