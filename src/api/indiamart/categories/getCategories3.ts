import {apiUrl} from "../../../constants.ts";

export async function getCategories3(category4: string) {
    let url = `${apiUrl}/indiamart/categories/3?`;
    url += new URLSearchParams({
        category4: category4,
    });

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