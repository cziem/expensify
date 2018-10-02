import moment from 'moment'

import selectExpense from '../../selectors/expenses'

const expenses = [
	{
		id: 1,
		description: "Range Rover",
		note: "Buy Range Rover for mum",
		amount: 842343,
		createdAt: 0
	},
	{
		id: 2,
		description: "Villa Home",
		note: "Build a house in the Villa home",
		amount: 2343,
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf()
	},
	{
		id: 3,
		description: "Domain",
		note: "",
		amount: 943,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
	}
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpense(expenses, filters)
  expect(result).toEqual([
    expenses[0], expenses[1]
  ])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpense(expenses, filters)
  expect(result).toEqual([
    expenses[2], expenses[0]
  ])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpense(expenses, filters)
  expect(result).toEqual([
    expenses[0], expenses[1]
  ])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpense(expenses, filters)
  expect(result).toEqual([
    expenses[2], expenses[0], expenses[1]
  ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpense(expenses, filters)
  expect(result).toEqual([
    expenses[0], expenses[1], expenses[2]
  ])
})