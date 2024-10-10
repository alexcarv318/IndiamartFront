import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import Table from "../components/Table/Table.tsx";
import {useEffect, useState} from "react";
import OpenFiltersButton from "../components/OpenFiltersButton/OpenFiltersButton.tsx";
import {getInitialProducts} from "../api/indiamart/getInitialProducts.ts";
import {getInitialRows} from "../api/indiamart/getInitialRows.ts";

const IndiamartPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [rowsAffected, setRowsAffected] = useState(0);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    useEffect(() => {
        getInitialProducts().then((res) => {
            setProducts(res.products);
        })
        getInitialRows().then((res) => {
            setRowsAffected(res.rows_affected);
        })
    }, [])

    return (
        <PageLayout
            setData={setProducts}
            page={"indiamart"}
            isFilterSidebarOpen={isFilterSidebarOpen}
            setIsFilterSidebarOpen={setIsFilterSidebarOpen}
            setRowsAffected={setRowsAffected}
        >
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Indiamart</h1>
                <p style={{alignSelf: "center", fontSize: "20px"}}>
                    <b>{rowsAffected}</b> rows affected
                </p>
                <OpenFiltersButton
                    onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
            </div>
            <Table arrayOfData={products}/>
        </PageLayout>
    )
}

export default IndiamartPage;