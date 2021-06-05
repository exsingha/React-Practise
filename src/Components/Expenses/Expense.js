import './Expense.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

const Expense = (props) => {
  const [newDataFilter, setNewDataFilter] = useState('2020');

  const filterDataHandler = (dataFilter) => {
    setNewDataFilter(dataFilter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newDataFilter} onFilterData={filterDataHandler} />
      {props.expenses.map((comp) =>
        comp.date.getFullYear().toString() === newDataFilter ? (
          <ExpenseItem
            title={comp.title}
            amount={comp.amount}
            date={comp.date}
            key={comp.id}
          />
        ) : (
          ''
        )
      )}
    </Card>
  );
};

export default Expense;
