export const handleHour = (date: number) => {
    const distance = date - new Date().getTime()

    return Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));
}