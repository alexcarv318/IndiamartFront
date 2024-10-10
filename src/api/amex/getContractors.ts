import {apiUrl} from "../../constants.ts";

type AmexContractorsFilters = {
    name: string;
    phone: string;
    city: string;
    state: string;
    category: string;
    zipCode: string;
}

export async function getContractors(filters: AmexContractorsFilters | null | undefined) {
    let url = `${apiUrl}/amex/contractors/filter`;

    if (filters !== null && filters !== undefined) {
        url += "?" + new URLSearchParams({
            name: filters.name.toString(),
            phone: filters.phone.toString(),
            city: filters.city ? filters.city.toString() : "",
            state: filters.state ? filters.state.toString() : "",
            category: filters.category ? filters.category.toString() : "",
            zip_code: filters.zipCode.toString(),
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