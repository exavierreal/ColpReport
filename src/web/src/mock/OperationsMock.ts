import { OperationModel } from "../shared/Models/Operation.model";

// Retirada = 1
// Depósito = 2
// Bônus = 3
// Desconto = 4
// Adiantamento = 5
// Devolução de Material = 6

export const OperationsMock: OperationModel[] = [
  {
    operationTypeId: 1,
    type: 'Retirada',
    description: 'O Poder Medicinal dos Sucos e Shakes',
    value: 500.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 2,
    type: 'Depósito',
    description: 'Pagamento em Dinheiro',
    value: 800.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 3,
    type: 'Bônus',
    description: 'Campeão de Vendas da 3ª Semana',
    value: 100.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 4,
    type: 'Desconto',
    description: 'Multa por atraso',
    value: 200.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 1,
    type: 'Retirada',
    description: 'Vida de Jesus',
    value: 300.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 2,
    type: 'Depósito',
    description: 'Coleção Completa',
    value: 700.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 5,
    type: 'Adiantamento',
    description: 'Adiantamento Ônibus',
    value: 15.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 6,
    type: 'Devolução de Material',
    description: 'Sucos e Shakes',
    value: 135.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  },
  {
    operationTypeId: 2,
    type: 'Depósito',
    description: 'Pagamento em Cartão',
    value: 150.00,
    registerDate: getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31))
  }
];

function getRandomDate(start: Date, end: Date): Date {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);
  return new Date(randomTime);
}
