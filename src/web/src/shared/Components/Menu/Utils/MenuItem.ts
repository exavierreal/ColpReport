interface MenuAttr {
    title: string;
    icon: string;
    path: string[];
}

export const menuItems: MenuAttr[] = [
    {
        title: 'Página Inicial',
        icon: 'akar-icons:home',
        path: ['/dashboard']
    },
    {
        title: 'Colportores',
        icon: 'akar-icons:person',
        path: ['/colporteurs', '/colporteurs/new']
    },
    {
        title: 'Extrato',
        icon: 'akar-icons:newspaper',
        path: ['/statement']
    },
    {
        title: 'Entrada e Saída',
        icon: 'akar-icons:money',
        path: ['/operation']
    },
    {
        title: 'Relatórios',
        icon: 'akar-icons:file',
        path: ['/reports']
    }
];