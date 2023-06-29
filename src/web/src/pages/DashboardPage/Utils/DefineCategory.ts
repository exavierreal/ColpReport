export interface StyleCategoryProps {
    background: string;
    color: string;
    textShadow: string;
}

export function DefineCategory(type: string): StyleCategoryProps | null {
    switch (type) {
        case 'LD':
            return { background: 'var(--primary-light-v3)', color: 'var(--primary-v3)', textShadow: 'rgba(53, 215, 205, 0.6)' };
        case 'PP':
            return { background: 'var(--warning-light-v2)', color: 'var(--warning-v1)', textShadow: 'rgba(224, 184, 76, 0.6)' };
        case 'IN':
            return { background: 'var(--success-light-v2)', color: 'var(--success-v1)', textShadow: 'rgba(86, 194, 110, 0.6)' };
        case 'AG':
            return { background: 'var(--danger-light-v1)', color: 'var(--danger-v1)', textShadow: 'rgba(233, 123, 123, 0.6)' };
        case 'IG':
            return { background: 'var(--warning-light-alt-v1)', color: 'var(--warning-alt-v1)', textShadow: 'rgba(227, 130, 59, 0.6)' };
        case 'PL':
            return { background: 'var(--info-light-alt-v1)', color: 'var(--info-alt-v1)', textShadow: 'rgba(166, 86, 194, 0.6)' };
        case 'CM':
            return { background: 'var(--info-light-v1)', color: 'var(--info-v2)', textShadow: 'rgba(53, 108, 215, 0.6)' };
        default:
            return null;
    }
}