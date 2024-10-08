import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import Table from "../components/Table/Table.tsx";
import {useEffect, useState} from "react";
import {getProducts} from "../api/indiamart/getProducts.ts";
import OpenFiltersButton from "../components/OpenFiltersButton/OpenFiltersButton.tsx";

const IndiamartPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    useEffect(() => {
        getProducts(null).then((res) => {
            setProducts(res)
            console.log(res)
        })
    }, [])

    return (
        <PageLayout setData={setProducts} page={"indiamart"} isFilterSidebarOpen={isFilterSidebarOpen} setIsFilterSidebarOpen={setIsFilterSidebarOpen}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Indiamart</h1>
                <OpenFiltersButton
                    onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
            </div>
            <Table arrayOfData={products}/>
        </PageLayout>
    )
}

export default IndiamartPage;