import {useEffect, useState} from "react";
import {getContractors} from "../api/buildzoom/getContractors.ts";
import Table from "../components/Table/Table.tsx";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import OpenFiltersButton from "../components/OpenFiltersButton/OpenFiltersButton.tsx";

const BuildzoomPage = () => {
    const [contractors, setContractors] = useState([]);
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res)
        })
    }, [])

    return (
        <PageLayout setData={setContractors} page={"buildzoom"} isFilterSidebarOpen={isFilterSidebarOpen} setIsFilterSidebarOpen={setIsFilterSidebarOpen}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Buildzoom</h1>
                <OpenFiltersButton
                    onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
                />
            </div>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    )
}

export default BuildzoomPage;