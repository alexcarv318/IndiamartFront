import styles from "./FiltersSideBar.module.scss"
import InputFilter from "../FilterComponents/InputFilter.tsx";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";

type FiltersSideBarProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    isOpen: boolean;
}

const FiltersSideBar = (props: FiltersSideBarProps) => {

    return (
        <div
            style={props.isOpen ? {width: "30%", opacity: 1} : {}}
            className={styles.filtersContainer}
        >
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