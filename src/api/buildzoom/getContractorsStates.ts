import {apiUrl} from "../../constants.ts";

export async function getContractorsStates() {
    const url = `${apiUrl}/buildzoom/contractors/states`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.contractors_states;
    } catch (err) {
        console.error(err);
    }
}