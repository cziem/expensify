import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.length}
  </div>
);

const ConnectedExpenseList = connect(state => {
  return {
    expenses: state.expenses
  };
})(ExpenseList);

export default ConnectedExpenseList;
