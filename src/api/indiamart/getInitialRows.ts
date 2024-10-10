import {apiUrl} from "../../constants.ts";

export async function getInitialRows() {
    const url = `${apiUrl}/indiamart/initial/rows`;

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