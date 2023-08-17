export const handlePaths = (prop: string) => {
    const arr = prop.split("/")
    const resolved = arr.filter((item) => {
        if (!item) return;
        if (item === "category") return;
        return item;
    })

    return resolved;
}