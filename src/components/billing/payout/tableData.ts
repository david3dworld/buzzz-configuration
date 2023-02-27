interface ITableHeaderData {
  id: number;
  text: string;
}
interface ITableBodyData {
  id: number;
  name: string;
  time: string;
  status: string;
  amount: string;
  productName: string;
  total: string;
}

export const tableHeaderData: ITableHeaderData[] = [
  { id: 1, text: 'CUSTOMER’S NAME' },
  { id: 2, text: 'TIME ADDED' },
  { id: 3, text: 'STATUS' },
  { id: 4, text: 'PRODUCT NAME' },
  { id: 5, text: 'AMOUNT' },
  { id: 6, text: 'TOTAL' },
];

export const tableBodyData: ITableBodyData[] = [
  {
    id: 1,
    name: 'Hakeem Olasupo',
    time: '2021-08-09 | 2:00pm',
    status: 'Paid',
    productName: 'Machala Shirt FR5',
    amount: '$0.00',
    total: '$2,804.90',
  },
  {
    id: 2,
    name: 'Qoreeb Abubakar',
    time: '2021-08-09 | 4:15pm',
    status: 'Paid',
    productName: 'Machala Shirt FR5',
    amount: '$134.348',
    total: '$2,804.90',
  },
  {
    id: 3,
    name: 'Kajoteni Jibowu',
    time: '2021-08-09 | 10:00am',
    status: 'Pending',
    productName: 'Machala Shirt FR5',
    amount: '$134.348',
    total: '$2,804.90',
  },
];
