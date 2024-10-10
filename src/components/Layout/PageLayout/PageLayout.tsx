import {ReactNode} from "react";
import Header from "../Header/Header.tsx";
import styles from "./PageLayout.module.scss";
import FiltersSideBar from "../../FiltersSideBar/FiltersSideBar.tsx";

type PageLayoutProps = {
    page: "amex" | "buildzoom" | "indiamart" | "nextdoor";
    isFilterSidebarOpen: boolean;
    setIsFilterSidebarOpen: (isOpen: boolean) => void;
    setData: (data: any) => void;
    setRowsAffected: (rowsAffected: number) => void;
    children: ReactNode;
}

const PageLayout = ({ children, page, setData, isFilterSidebarOpen, setIsFilterSidebarOpen, setRowsAffected }: PageLayoutProps) => {

    return (
        <div>
            <Header/>
            <FiltersSideBar
                page={page}
                setData={setData}
                isOpen={isFilterSidebarOpen}
                setRowsAffected={setRowsAffected}
                setIsFilterSidebarOpen={setIsFilterSidebarOpen}
            />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default PageLayout;