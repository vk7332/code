export interface TdsRate {
  value: string;
  label: string;
  individualRate: number;
  otherRate: number;
  threshold: number;
}

export const tdsRates: TdsRate[] = [
  {
    value: '192',
    label: 'Sec 192: Salary',
    individualRate: 10, // Slab rates apply, this is an approximation
    otherRate: 10,
    threshold: 250000,
  },
  {
    value: '194A',
    label: 'Sec 194A: Interest on Deposits',
    individualRate: 10,
    otherRate: 10,
    threshold: 40000,
  },
  {
    value: '194B',
    label: 'Sec 194B: Winnings from lottery',
    individualRate: 30,
    otherRate: 30,
    threshold: 10000,
  },
  {
    value: '194BB',
    label: 'Sec 194BB: Winnings from horse race',
    individualRate: 30,
    otherRate: 30,
    threshold: 10000,
  },
  {
    value: '194C',
    label: 'Sec 194C: Payment to Contractors',
    individualRate: 1,
    otherRate: 2,
    threshold: 30000,
  },
  {
    value: '194D',
    label: 'Sec 194D: Insurance Commission',
    individualRate: 5,
    otherRate: 10,
    threshold: 15000,
  },
  {
    value: '194DA',
    label: 'Sec 194DA: Life Insurance Policy',
    individualRate: 5,
    otherRate: 5,
    threshold: 100000,
  },
  {
    value: '194EE',
    label: 'Sec 194EE: Payments for NSS deposits',
    individualRate: 10,
    otherRate: 10,
    threshold: 2500,
  },
  {
    value: '194G',
    label: 'Sec 194G: Commission on lottery tickets',
    individualRate: 5,
    otherRate: 5,
    threshold: 15000,
  },
  {
    value: '194H',
    label: 'Sec 194H: Commission or Brokerage',
    individualRate: 5,
    otherRate: 5,
    threshold: 15000,
  },
  {
    value: '194I',
    label: 'Sec 194I: Rent',
    individualRate: 10,
    otherRate: 10,
    threshold: 240000,
  },
  {
    value: '194J',
    label: 'Sec 194J: Professional or Technical Fees',
    individualRate: 10,
    otherRate: 10,
    threshold: 30000,
  },
  {
    value: '194K',
    label: 'Sec 194K: Income from units',
    individualRate: 10,
    otherRate: 10,
    threshold: 5000,
  },
  {
    value: '194LA',
    label: 'Sec 194LA: Compensation on Acquisition',
    individualRate: 10,
    otherRate: 10,
    threshold: 250000,
  },
  {
    value: '194N',
    label: 'Sec 194N: Cash Withdrawal',
    individualRate: 2,
    otherRate: 2,
    threshold: 10000000,
  },
  {
    value: '194O',
    label: 'Sec 194O: E-commerce participant payments',
    individualRate: 1,
    otherRate: 1,
    threshold: 500000,
  },
  {
    value: '194Q',
    label: 'Sec 194Q: Purchase of goods',
    individualRate: 0.1,
    otherRate: 0.1,
    threshold: 5000000,
  },
  {
    value: '194S',
    label: 'Sec 194S: Transfer of virtual digital asset',
    individualRate: 1,
    otherRate: 1,
    threshold: 50000,
  },
];
