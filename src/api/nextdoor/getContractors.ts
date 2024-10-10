import {apiUrl} from "../../constants.ts";

type NextdoorContractorsFilters = {
    name: string;
    phone: string;
    city: string;
    state: string;
    zip_code: string;
    category: string;
}

export async function getContractors(filters: NextdoorContractorsFilters | null | undefined) {
    let url = `${apiUrl}/nextdoor/contractors/filter`;

    if (filters !== null && filters !== undefined) {
        url += "?" + new URLSearchParams({
            name: filters.name.toString(),
            phone: filters.phone.toString(),
            city: filters.city ? filters.city.toString() : "",
            state: filters.state ? filters.state.toString() : "",
            zip_code: filters.zip_code.toString(),
            category: filters.category ? filters.category.toString() : "",
        })
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error(err);
    }
}