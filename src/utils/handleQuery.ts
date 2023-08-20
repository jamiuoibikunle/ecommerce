import { Query } from "@/types"

export const handleQuery = (query: Query, key: string, item: string) => {
    // Sort other queries
    const others = spreadQueries(query, key)
    console.log(others)

    // Check if key exists
    const keyExists = query[key];
    if (keyExists) {
    }
    console.log(query)

}

const spreadQueries = (query: Query, foreignkey: string) => {
    let resolved = "";
    let count = 0;

    delete query[foreignkey]

    for (const [key, value] of Object.entries(query)) {
        count === 0 ? resolved += `?${key}=${value}` : resolved += `&${key}=${value}`;
        count++;
    }

    return resolved
}