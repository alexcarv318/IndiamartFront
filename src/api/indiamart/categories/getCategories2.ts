import {apiUrl} from "../../../constants.ts";

export async function getCategories2(category3: string) {
    let url = `${apiUrl}/indiamart/categories/2?`;
    url += new URLSearchParams({
        category3: category3,
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