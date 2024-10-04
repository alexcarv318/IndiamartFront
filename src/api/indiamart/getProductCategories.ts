import {apiUrl} from "../../constants.ts";

export async function getProductCategories() {
    const url = `${apiUrl}/indiamart/products/categories`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.product_categories;
    } catch (err) {
        console.error(err);
    }
}