import {useEffect, useState} from "react";
import InputFilter from "../FilterComponents/InputFilter.tsx";
import {getProducts} from "../../api/indiamart/getProducts.ts";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {getProductCategories} from "../../api/indiamart/getProductCategories.ts";
import {Button} from "@mui/joy";
import NumericInputFilter from "../FilterComponents/NumericInputFilter.tsx";

type IndiamartFiltersProps = {
    setProducts: (products: any) => void;
}

const IndiamartFilters = (props: IndiamartFiltersProps) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProductCategories().then((res) => {
            setCategories(res);
        })
    }, []);

    function handleSubmit() {
        getProducts({
            minPrice: minPrice,
            maxPrice: maxPrice,
            name: name,
            category: category,
            companyName: companyName,
            companyCity: companyCity,
            companyState: companyState,
            companyCountry: companyCountry,
            limit: 50,
        }).then((res) => {
            props.setProducts(res)
        })
    }

    return (
        <>
            <NumericInputFilter placeholder={"From price"} onChange={(event) => {setMinPrice(parseFloat(event.target.value))}} />
            <NumericInputFilter placeholder={"To price"} onChange={(event) => setMaxPrice(parseFloat(event.target.value))} />
            <InputFilter placeholder={"Name"} onChange={(event) => setName(event.target.value)} />
            <AutocompleteFilter placeholder={"Category"} options={categories} onChange={(event) => setCategory(event.target.value)} />
            <InputFilter placeholder={"Company Name"}  onChange={(event) => setCompanyName(event.target.value)} />
            <InputFilter placeholder={"Company City"}  onChange={(event) => setCompanyCity(event.target.value)} />
            <InputFilter placeholder={"Company State"}  onChange={(event) => setCompanyState(event.target.value)} />
            <InputFilter placeholder={"Company Country"}  onChange={(event) => setCompanyCountry(event.target.value)} />

            <Button onClick={handleSubmit} variant="solid" size="md" sx={{ marginTop: 3 }}>Search</Button>
        </>
    )
}

export default IndiamartFilters