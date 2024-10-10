import {apiUrl} from "../../constants.ts";

export async function getInitialProducts() {
    const url = `${apiUrl}/indiamart/initial/products`;

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