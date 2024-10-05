import {ReactNode, useState} from "react";
import Header from "../Header/Header.tsx";
import styles from "./PageLayout.module.scss";
import FiltersSideBar from "../../FiltersSideBar/FiltersSideBar.tsx";
import OpenFiltersButton from "../../OpenFiltersButton/OpenFiltersButton.tsx";

type PageLayoutProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    children: ReactNode;
}

const PageLayout = ({ children, page }: PageLayoutProps) => {
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    return (
        <div>
            <Header/>
            <FiltersSideBar page={page} isOpen={isFilterSidebarOpen} setIsFilterSidebarOpen={setIsFilterSidebarOpen}/>
            <main className={styles.main}>
                {children}
                <OpenFiltersButton
                    onClick={() => {
                        setIsFilterSidebarOpen(!isFilterSidebarOpen)
                    }}
                />
            </main>
        </div>
    )
}

export default PageLayout;