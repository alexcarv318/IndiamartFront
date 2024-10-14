import {useEffect, useState} from "react";
import {getContractorsCities} from "../../api/amex/getContractorsCities.ts";
import {getContractorsStates} from "../../api/amex/getContractorsStates.ts";
import {getContractorsCategories} from "../../api/amex/getContractorsCategories.ts";
import {getContractors} from "../../api/amex/getContractors.ts";
import InputFilter from "../FilterComponents/InputFilter.tsx";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {Button} from "@mui/joy";

type AmexFiltersProps = {
    setContractors: (contractors: any) => void;
    setRowsAffected: (rowsAffected: any) => void;
}

const AmexFilters = (props: AmexFiltersProps) => {
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [category, setCategory] = useState('');

    //autocomplete values
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getContractorsCities().then((res) => {
            setCities(res);
        })
        getContractorsStates().then((res) => {
            setStates(res);
        })
        getContractorsCategories().then((res) => {
            setCategories(res);
        })
    }, []);

    function handleSubmit() {
        getContractors({
            name: companyName,
            phone: phone,
            city: city,
            state: state,
            zipCode: zipCode,
            category: category,
        }).then((res) => {
            props.setContractors(res.contractors);
            props.setRowsAffected(res.rows_affected);
        })
    }

    return (
        <>
            <InputFilter placeholder={"Company Name"} onChange={(event) => {setCompanyName((event.target as HTMLInputElement).value)}} />
            <InputFilter placeholder={"Phone"} onChange={(event) => {setPhone((event.target as HTMLInputElement).value)}} />
            <InputFilter placeholder={"Zip code"} onChange={(event) => {setZipCode((event.target as HTMLInputElement).value)}} />

            <AutocompleteFilter placeholder={"City"} options={cities} onChange={(value) => {setCity(value)}} />
            <AutocompleteFilter placeholder={"State"} options={states} onChange={(value) => {setState(value)}} />
            <AutocompleteFilter placeholder={"Category"} options={categories} onChange={(value) => {setCategory(value)}} />

            <Button onClick={handleSubmit} variant="solid" size="md" sx={{ marginTop: 3 }}>Search</Button>
        </>
    )
}

export default AmexFilters;