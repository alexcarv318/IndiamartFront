import {useEffect, useState} from "react";
import {getContractors} from "../api/nextdoor/getContractors.ts";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import Table from "../components/Table/Table.tsx";
import OpenFiltersButton from "../components/OpenFiltersButton/OpenFiltersButton.tsx";

const NextdoorPage = () => {
    const [contractors, setContractors] = useState([]);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res);
        })
    }, [])

    return (
        <PageLayout setData={setContractors} page={"nextdoor"} isFilterSidebarOpen={isFilterSidebarOpen} setIsFilterSidebarOpen={setIsFilterSidebarOpen}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Nextdoor</h1>
                <OpenFiltersButton
                    onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
            </div>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    )
}

export default NextdoorPage;