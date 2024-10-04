import {useEffect, useState} from "react";
import {getContractors} from "../api/nextdoor/getContractors.ts";
import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import Table from "../components/Table/Table.tsx";

const NextdoorPage = () => {
    const [contractors, setContractors] = useState([]);

    useEffect(() => {
        getContractors(null).then((res) => {
            setContractors(res);
        })
    }, [])

    return (
        <PageLayout page={"nextdoor"}>
            <h1>Nextdoor</h1>
            <Table arrayOfData={contractors}/>
        </PageLayout>
    );
}

export default NextdoorPage;