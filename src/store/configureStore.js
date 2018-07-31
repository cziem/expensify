import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Create store
export default () => {
  return store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )
};
