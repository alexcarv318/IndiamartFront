import {useEffect, useState} from "react";
import {getContractors} from "../api/buildzoom/getContractors.ts";
import Table from "../components/Table/Table.tsx";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";

const BuildzoomPage = () => {
    const [contractors, setContractors] = useState([]);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res)
        })
    }, [])

    return (
        <PageLayout setData={setContractors} page={"buildzoom"}>
            <h1>Buildzoom</h1>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    )
}

export default BuildzoomPage;