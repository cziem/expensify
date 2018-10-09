import React from 'react'
import { shallow } from 'enzyme'
import Expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={Expenses[2]}
  />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(Expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(Expenses[2].id, Expenses[2])
})

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: Expenses[2].id
  })
})