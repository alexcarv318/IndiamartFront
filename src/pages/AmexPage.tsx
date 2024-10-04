import {useEffect, useState} from "react";
import {getContractors} from "../api/amex/getContractors.ts";
import Table from "../components/Table/Table.tsx";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";

const AmexPage = () => {
    const [contractors, setContractors] = useState([]);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res)
        })
    }, [])

    return (
        <PageLayout page={"amex"}>
            <h1>Amex</h1>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    )
}

export default AmexPage;