import PageLayout from "../components/Layout/PageLayout/PageLayout.tsx";
import Table from "../components/Table/Table.tsx";
import {useEffect, useState} from "react";
import {getProducts} from "../api/indiamart/getProducts.ts";

const IndiamartPage = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        getProducts(null).then((res) => {
            setProducts(res)
            console.log(res)
        })
    }, [])

    return (
        <PageLayout page={"indiamart"}>
            <h1>Indiamart</h1>
            <Table arrayOfData={products}/>
        </PageLayout>
    )
}

export default IndiamartPage;