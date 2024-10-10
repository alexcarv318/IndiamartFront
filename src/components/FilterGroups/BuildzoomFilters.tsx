import {useEffect, useState} from "react";
import {getContractorsCities} from "../../api/buildzoom/getContractorsCities.ts";
import {getContractorsStates} from "../../api/buildzoom/getContractorsStates.ts";
import {getContractors} from "../../api/buildzoom/getContractors.ts";
import InputFilter from "../FilterComponents/InputFilter.tsx";
import AutocompleteFilter from "../FilterComponents/AutocompleteFilter.tsx";
import {Button} from "@mui/joy";

type BuildzoomFiltersProps = {
    setContractors: (contractors: any) => void;
    setRowsAffected: (rowsAffected: number) => void;
}

const BuildzoomFilters = (props: BuildzoomFiltersProps) => {
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

    //autocomplete values
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);

    useEffect(() => {
        getContractorsCities().then((res) => {
            setCities(res);
        })
        getContractorsStates().then((res) => {
            setStates(res);
        })
    }, []);

    function handleSubmit() {
        getContractors({
            companyName: companyName,
            phone: phone,
            city: city,
            state: state,
            postalCode: postalCode,
        }).then((res) => {
            props.setContractors(res.contractors);
            props.setRowsAffected(res.rowsAffected);
        })
    }

    return (
        <>
            <InputFilter placeholder={"Company Name"} onChange={(event) => {setCompanyName((event.target as HTMLInputElement).value)}} />
            <InputFilter placeholder={"Phone"} onChange={(event) => {setPhone((event.target as HTMLInputElement).value)}} />
            <AutocompleteFilter placeholder={"City"} options={cities} onChange={(value) => {setCity(value)}} />
            <AutocompleteFilter placeholder={"State"} options={states} onChange={(value) => {setState(value)}} />
            <InputFilter placeholder={"Postal code"} onChange={(event) => {setPostalCode((event.target as HTMLInputElement).value)}} />

            <Button onClick={handleSubmit} variant="solid" size="md" sx={{ marginTop: 3 }}>Search</Button>
        </>
    )
}

export default BuildzoomFilters;