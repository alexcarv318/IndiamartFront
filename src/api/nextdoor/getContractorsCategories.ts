import {apiUrl} from "../../constants.ts";

export async function getContractorsCategories() {
    const url = `${apiUrl}/nextdoor/contractors/categories`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractors_categories;
    } catch (err) {
        console.error(err);
    }
}