import { Query } from "@/types";

export const handleQuery = (query: Query, key: string, item: string) => {
	switch (key) {
		case "brand":
			{
				// Sort other queries
				const brand = handleBrand(query, key, item);
				const others = handleSpread(query, key, brand);
				return others;
			}

		case "feature": {
			// Sort other queries
			const feature = handleFeature(query, key, item);
			const others = handleSpread(query, key, feature);
			return others;
		}

		case "rating": {
			// Sort other queries
			const rating = handleRating(query, key, item);
			const others = handleSpread(query, key, rating);
			return others;
		}

		default:
			return () => {
				console.log("Yo");
			};
	}
};

const handleBrand = (query: Query, key: string, item: string) => {
	// Check if item is in key, if there remove. If not, add. Handle the +
	let queryArray = query[key]?.split("+") || [];
	console.log(queryArray)

	if (queryArray?.includes(item)) {
		queryArray = queryArray.filter((e) => e !== item);
	} else {
		queryArray.push(item);
	}

	const resolved = queryArray.join("+");

	return resolved ? `brand=${resolved}` : "";
};

const handleFeature = (query: Query, key: string, item: string) => {
	// Check if item is in key, if there remove. If not, add. Handle the +
	let queryArray = query[key]?.split("+") || [];
	console.log(queryArray)

	if (queryArray?.includes(item)) {
		queryArray = queryArray.filter((e) => e !== item);
	} else {
		queryArray.push(item);
	}

	const resolved = queryArray.join("+");

	return resolved ? `feature=${resolved}` : "";
};

const handleRating = (query: Query, key: string, item: string) => {
	// Check if item is in key, if there remove. If not, add. Handle the +
	let queryArray = query[key]?.split("+") || [];
	console.log(queryArray)

	if (queryArray?.includes(item)) {
		queryArray = queryArray.filter((e) => e !== item);
	} else {
		queryArray.push(item);
	}

	const resolved = queryArray.join("+");

	return resolved ? `rating=${resolved}` : "";
};

const handleSpread = (
	query: Query,
	foreignkey: string,
	queryToAppend: string
) => {
	let resolved = "";
	let count = 0;

	for (const [key, value] of Object.entries(query)) {
		// Skip foreignkey and resolve new search query
		if (key !== foreignkey) {
			if (!value) continue;

			count === 0
				? (resolved += `?${key}=${value}`)
				: (resolved += `&${key}=${value}`);
			count++;
		}
	}

	if (queryToAppend) {
		resolved.includes("?")
			? (resolved += `&${queryToAppend}`)
			: (resolved += `?${queryToAppend}`);
	}

	return resolved;
};
