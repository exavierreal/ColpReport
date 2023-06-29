export interface OperationStyle {
    icon?: string;
    color?: string;
}

export function getOperationStyle(type: number): OperationStyle {
    switch (type) {
        case 1:
            return {
                icon: 'akar-icons:book',
                color: 'var(--danger-v1)'
            }
        case 2:
            return {
                icon: 'akar-icons:money',
                color: 'var(--success-v1)'
            }
        case 3:
            return {
                icon: 'akar-icons:gift',
                color: 'var(--primary-v3)'
            }
        case 4:
            return {
                icon: 'akar-icons:circle-x',
                color: 'var(--danger-v1)'
            }
        case 5:
            return {
                icon: 'akar-icons:money',
                color: 'var(--danger-v1)'
            }
        case 6:
            return {
                icon: 'akar-icons:book',
                color: 'var(--success-v1)'
            }
        default:
            return {
                icon: '',
                color: ''
            };
    }
}