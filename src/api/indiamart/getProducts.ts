import {apiUrl} from "../../constants.ts";

type ProductsFilters = {
    minPrice: number;
    maxPrice: number;
    name: string;
    category1: string;
    category2: string;
    category3: string;
    category4: string;
    companyName: string;
    companyCity: string;
    companyState: string;
    companyCountry: string;
    limit: number;
}

export async function getProducts(filters: ProductsFilters | null | undefined) {
    let url = `${apiUrl}/indiamart/products/filter`;

    if (filters !== null && filters !== undefined) {
        url += "?" + new URLSearchParams({
            min_price: filters.minPrice.toString(),
            max_price: filters.maxPrice.toString(),
            name: filters.name,
            category1: filters.category1 ? filters.category1 : "",
            category2: filters.category2 ? filters.category2 : "",
            category3: filters.category3 ? filters.category3 : "",
            category4: filters.category4 ? filters.category4 : "",
            company_name: filters.companyName,
            company_city: filters.companyCity,
            company_state: filters.companyState,
            company_country: filters.companyCountry,
            limit: filters.limit.toString(),
        })
    }

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