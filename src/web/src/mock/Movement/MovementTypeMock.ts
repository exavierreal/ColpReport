interface MovementType {
    id: number;
    name: string;
    movementId: number;
}

export const MovementTypeMock: MovementType[] = [
    {
        id: 0,
        name: 'Depósito',
        movementId: 1
    },
    {
        id: 1,
        name: 'Bônus',
        movementId: 1
    },
    {
        id: 2,
        name: 'Dev. Material',
        movementId: 1
    },
    {
        id: 3,
        name: 'Dev. Adiantamento',
        movementId: 1
    },
    {
        id: 4,
        name: 'Retirada',
        movementId: 2
    },
    {
        id: 5,
        name: 'Despesa',
        movementId: 2
    },
    {
        id: 6,
        name: 'Adiantamento',
        movementId: 2
    },
    {
        id: 7,
        name: 'Desconto',
        movementId: 2
    }
];