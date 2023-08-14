export const handleSecond = (date: number) => {
    const distance = date - new Date().getTime()

    return Math.floor((distance % (1000 * 60)) / 1000);
}