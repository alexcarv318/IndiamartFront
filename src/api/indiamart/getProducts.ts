import {apiUrl} from "../../constants.ts";

type ProductsFilters = {
    minPrice: number;
    maxPrice: number;
    name: string;
    category: string
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
            category: filters.category,
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

        const json = await response.json();
        return json.products;
    } catch (err) {
        console.error(err);
    }
}