import {useEffect, useState} from "react";
import InputFilter from "../FilterComponents/InputFilter.tsx";
import {getProducts} from "../../api/indiamart/getProducts.ts";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {Button} from "@mui/joy";
import NumericInputFilter from "../FilterComponents/NumericInputFilter.tsx";
import {getCategories4} from "../../api/indiamart/categories/getCategories4.ts";
import {getCategories3} from "../../api/indiamart/categories/getCategories3.ts";
import {getCategories2} from "../../api/indiamart/categories/getCategories2.ts";
import {getCategories1} from "../../api/indiamart/categories/getCategories1.ts";

type IndiamartFiltersProps = {
    setProducts: (products: any) => void;
    setRowsAffected: (rowsAffected: any) => void;
}

const IndiamartFilters = (props: IndiamartFiltersProps) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [name, setName] = useState("");

    // Category selected values
    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [category3, setCategory3] = useState('');
    const [category4, setCategory4] = useState('');

    // Company stuff
    const [companyName, setCompanyName] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");

    // Categories selects stuff
    const [categories1, setCategories1] = useState([]);
    const [categories2, setCategories2] = useState([]);
    const [categories3, setCategories3] = useState([]);
    const [categories4, setCategories4] = useState([]);

    useEffect(() => {
        getCategories4().then((res) => {
            setCategories4(res.categories);
        })
    }, []);

    useEffect(() => {
        getCategories3(category4).then((res) => {
            setCategories3(res.categories);
        })
    }, [category4]);

    useEffect(() => {
        getCategories2(category3).then((res) => {
            setCategories2(res.categories);
        })
    }, [category3]);

    useEffect(() => {
        getCategories1(category2).then((res) => {
            setCategories1(res.categories);
        })
    }, [category2]);

    function handleSubmit() {
        getProducts({
            minPrice: minPrice,
            maxPrice: maxPrice,
            name: name,
            category1: category1,
            category2: category2,
            category3: category3,
            category4: category4,
            companyName: companyName,
            companyCity: companyCity,
            companyState: companyState,
            companyCountry: companyCountry,
            limit: 50,
        }).then((res) => {
            props.setProducts(res.products);
            props.setRowsAffected(res.rows_affected);
        })
    }

    function handleNumericInputChange(value: any, setValue: (value: any) => void) {
        if (Number.isNaN(value)) {
            return setValue(0);
        } else {
            return setValue(parseFloat(value));
        }
    }

    return (
        <>
            <NumericInputFilter placeholder={"From price"} onChange={(event) => {handleNumericInputChange((event.target as HTMLInputElement).value, setMinPrice)}} />
            <NumericInputFilter placeholder={"To price"} onChange={(event) => {handleNumericInputChange((event.target as HTMLInputElement).value, setMaxPrice)}} />
            <InputFilter placeholder={"Name"} onChange={(event) => setName((event.target as HTMLInputElement).value)} />
            <InputFilter placeholder={"Company Name"}  onChange={(event) => setCompanyName((event.target as HTMLInputElement).value)} />
            <InputFilter placeholder={"Company City"}  onChange={(event) => setCompanyCity((event.target as HTMLInputElement).value)} />
            <InputFilter placeholder={"Company State"}  onChange={(event) => setCompanyState((event.target as HTMLInputElement).value)} />
            <InputFilter placeholder={"Company Country"}  onChange={(event) => setCompanyCountry((event.target as HTMLInputElement).value)} />

            <AutocompleteFilter placeholder={"Category 4"} options={categories4} onChange={(value) => setCategory4(value)} />
            <AutocompleteFilter placeholder={"Category 3"} options={categories3} onChange={(value) => setCategory3(value)} invisible={category4 == "" || category4 === null || category4 === undefined} />
            <AutocompleteFilter placeholder={"Category 2"} options={categories2} onChange={(value) => setCategory2(value)} invisible={category3 == "" || category3 === null || category3 === undefined} />
            <AutocompleteFilter placeholder={"Category 1"} options={categories1} onChange={(value) => setCategory1(value)} invisible={category2 == "" || category2 === null || category2 === undefined} />

            <Button onClick={handleSubmit} variant="solid" size="md" sx={{ marginTop: 3 }}>Search</Button>
        </>
    )
}

export default IndiamartFilters;