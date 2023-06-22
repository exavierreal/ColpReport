export function FormatDatePresentation (date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    var monthString = '';
    
    switch (month) {
        case 1:
            monthString = 'Jan';
            break;
        case 2:
            monthString = 'Fev';
            break;
        case 3:
            monthString = 'Mar';
            break;
        case 4:
            monthString = 'Abr';
            break;
        case 5:
            monthString = 'Mai';
            break;
        case 6:
            monthString = 'Jun';
            break;
        case 7:
            monthString = 'Jul';
            break;
        case 8:
            monthString = 'Ago';
            break;
        case 9:
            monthString = 'Set';
            break;
        case 10:
            monthString = 'Out';
            break;
        case 11:
            monthString = 'Nov';
            break;
        case 12:
            monthString = 'Dez';
            break;
    }

    return `${monthString}/${year}`;
}