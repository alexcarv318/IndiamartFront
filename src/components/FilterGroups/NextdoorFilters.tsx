import {useEffect, useState} from "react";
import {getContractorsCities} from "../../api/nextdoor/getContractorsCities.ts";
import {getContractorsStates} from "../../api/nextdoor/getContractorsStates.ts";
import {getContractorsCategories} from "../../api/nextdoor/getContractorsCategories.ts";
import InputFilter from "../FilterComponents/InputFilter.tsx";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {getContractors} from "../../api/nextdoor/getContractors.ts";
import {Button} from "@mui/joy";

type NextdoorFiltersProps = {
    setContractors: (contractors: any) => void;
}

const NextdoorFilters = (props: NextdoorFiltersProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [category, setCategory] = useState('');

    //autocomplete values
    const [cities, setCitites] = useState([]);
    const [states, setStates] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getContractorsCities().then((res) => {
            setCitites(res);
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
            name: name,
            phone: phone,
            city: city,
            state: state,
            zip_code: zipCode,
            category: category,
        }).then((res) => {
            props.setContractors(res)
        })
    }

    return (
        <>
            <InputFilter placeholder={"Name"} onChange={(event) => {setName(event.target.value)}} />
            <InputFilter placeholder={"Phone"} onChange={(event) => {setPhone(event.target.value)}} />
            <AutocompleteFilter placeholder={"City"} options={cities} onChange={(event) => {setCity(event.target.value)}} />
            <AutocompleteFilter placeholder={"State"} options={states} onChange={(event) => {setState(event.target.value)}} />
            <InputFilter placeholder={"Zip code"} onChange={(event) => {setZipCode(event.target.value)}} />
            <AutocompleteFilter placeholder={"Category"} options={categories} onChange={(event) => {setCategory(event.target.value)}} />

            <Button onClick={handleSubmit} variant="solid" size="md" sx={{ marginTop: 3 }}>Search</Button>
        </>
    )
}

export default NextdoorFilters;