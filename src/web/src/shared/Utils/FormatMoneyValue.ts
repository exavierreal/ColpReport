export function FormatMoneyValue (value: string) {
    const [integerPart, decimalPart] = value.split(',');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';

    return `R$ ${formattedIntegerPart},${formattedDecimalPart.padEnd(2, '0')}`;
}