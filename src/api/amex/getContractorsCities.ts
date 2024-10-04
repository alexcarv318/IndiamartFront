import {apiUrl} from "../../constants.ts";

export async function getContractorsCities() {
    const url = `${apiUrl}/amex/contractors/cities`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractors_cities;
    } catch (err) {
        console.error(err);
    }
}