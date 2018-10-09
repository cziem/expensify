import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import Expenses from '../fixtures/expenses'

let history, onSubmit, wrapper

beforeEach(() => {
  history = { push: jest.fn() };
	onSubmit = jest.fn();
	wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(Expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(onSubmit).toHaveBeenLastCalledWith(Expenses[1])
})