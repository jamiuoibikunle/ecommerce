import { useEffect, useState } from "react"

const useLayout = () => {
    const [stored, setStored] = useState<string | null>(null)

    useEffect(() => {
        const stored = localStorage.getItem("layout")
        setStored(stored)
    }, [])

    return stored === "list" ? ["list"] : ["grid"]
}

export default useLayout