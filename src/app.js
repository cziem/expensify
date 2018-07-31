import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import configureStore from "./store/configureStore";

import "normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({ description: "Water Bill", amount: 500 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas Bill", amount: 350 })
);

store.dispatch(setTextFilter("gas"));

setTimeout(() => {
  store.dispatch(setTextFilter("Water"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
