import { Query } from "@/types";
import { useEffect, useState } from "react";

const useFetchFilters = (query: Query) => {
	const [queries, setQueries] = useState<string[]>([])

	useEffect(() => {
		for (const [key, value] of Object.entries(query)) {
			const mapped = value.split("+")
			mapped.map((item) => setQueries(queries => [...queries, item.replaceAll("%20", " ")])
			)
		}
	}, [])

	return [queries]
}

export default useFetchFilters;