import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import Expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={Expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submissioin', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
  const value = 'note for taking'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if input is valid', () => {
  const value = '23.20'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should  not set amount if input is invalid', () => {
  const value = '23.345'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})