import {apiUrl} from "../../constants.ts";

type GetCategoriesProps = {
    category4: string;
    category3: string;
    category2: string;
}

export async function getProductCategories(props: GetCategoriesProps | null | undefined) {
    let url = `${apiUrl}/indiamart/categories`;
    console.log("Categories requested!");

    if (props !== null && props !== undefined) {
        url += "?" + new URLSearchParams({
            category4: props ? props.category4 : "",
            category3: props ? props.category3 : "",
            category2: props ? props.category2 : "",
        })
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        console.log("Categories request finished!")
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}