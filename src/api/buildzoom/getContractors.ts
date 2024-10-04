import {apiUrl} from "../../constants.ts";

type BuildzoomContractorsFilters = {
    companyName: string;
    phone: string;
    city: string;
    state: string;
    postalCode: string;
}

export async function getContractors(filters: BuildzoomContractorsFilters | null | undefined) {
    let url = `${apiUrl}/contractors/filter`;

    if (filters !== null && filters !== undefined) {
        url += "?" + new URLSearchParams({
            company_name: filters.companyName.toString(),
            phone: filters.phone.toString(),
            city: filters.city.toString(),
            state: filters.state.toString(),
            postal_code: filters.postalCode.toString(),
        })
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractors;
    } catch (err) {
        console.error(err);
    }
}