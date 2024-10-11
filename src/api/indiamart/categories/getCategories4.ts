import {apiUrl} from "../../../constants.ts";

export async function getCategories4() {
    const url = `${apiUrl}/indiamart/categories/4`;

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