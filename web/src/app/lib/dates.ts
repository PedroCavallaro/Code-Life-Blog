export function formatPostNumber(postNumber: number) {
    if (postNumber < 10) return `00${postNumber}`;
    if (postNumber >= 10 && postNumber <= 100) return `0${postNumber}`;
    return postNumber;
}
export function formatPostDate(date: string) {
    const newDate = new Date(date);
    let month = newDate.toLocaleString("default", {
        month: `long`,
    });

    return (
        month.charAt(0).toUpperCase() +
        month.slice(1) +
        ", " +
        newDate.getFullYear()
    );
}
