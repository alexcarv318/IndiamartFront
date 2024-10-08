import {useEffect, useState} from "react";
import {getContractors} from "../api/amex/getContractors.ts";
import Table from "../components/Table/Table.tsx";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import OpenFiltersButton from "../components/OpenFiltersButton/OpenFiltersButton.tsx";

const AmexPage = () => {
    const [contractors, setContractors] = useState([]);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res)
        })
    }, [])

    return (
        <PageLayout setData={setContractors} page={"amex"} isFilterSidebarOpen={isFilterSidebarOpen} setIsFilterSidebarOpen={setIsFilterSidebarOpen}>
            <div>
                <h1>Amex</h1>
                <OpenFiltersButton
                    onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
            </div>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    )
}

export default AmexPage;