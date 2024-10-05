import {apiUrl} from "../../constants.ts";

export async function getContractorsCities() {
    const url = `${apiUrl}/buildzoom/contractors/cities`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractor_cities;
    } catch (err) {
        console.error(err);
    }
}