export function CalculateStars(sinceDate: Date) {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - sinceDate.getTime();
    const years = timeDifference / (1000 * 60 * 60 * 24 * 365);

    const fullStars = Math.floor(years / 2);
    const remainingMonths = Math.floor(years % 2);
    let halfStar = false;

    if (remainingMonths >= 6)
        halfStar = true;

    return {
        fullStars,
        halfStar
    }
}