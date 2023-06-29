interface ValuesBoxType {
    title: string;
    totalText: string;
    icon: string;
    mainColor: string;
    secondaryColor: string;
}

export function DefineStyle(type: string): ValuesBoxType | null {
    switch(type) {
        case 'balance':
            return {
                title: 'Saldo',
                totalText: 'Total de Depósitos:',
                icon: 'akar-icons:money',
                mainColor: 'var(--warning-v2)',
                secondaryColor: 'var(--warning-light-v1)'
            }
        case 'acquire':
            return {
                title: 'Retirada',
                totalText: 'Materiais Retirados:',
                icon: 'akar-icons:basket',
                mainColor: 'var(--success-v2)',
                secondaryColor: 'var(--success-light-v1)'
            }
        case 'delivery':
            return {
                title: 'A Entregar',
                totalText: 'Entregas a Fazer:',
                icon: 'akar-icons:shopping-bag',
                mainColor: 'var(--primary-v2)',
                secondaryColor: 'var(--primary-light-v2)'
            }
        default:
            return null;
    }
}