import {apiUrl} from "../../constants.ts";

export async function getContractorsCategories() {
    const url = `${apiUrl}/amex/contractors/categories`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractor_categories;
    } catch (err) {
        console.error(err);
    }
}