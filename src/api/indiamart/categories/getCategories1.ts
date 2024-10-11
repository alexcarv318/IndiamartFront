import {apiUrl} from "../../../constants.ts";

export async function getCategories1(category2: string) {
    let url = `${apiUrl}/indiamart/categories/1?`;
    url += new URLSearchParams({
        category2: category2,
    })

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