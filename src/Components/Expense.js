import './Expense.css';
import ExpenseItem from './ExpenseItem';

function Expense(props) {
  return (
    <div className="expenses">
      {props.expenses.map((comp) => (
        <ExpenseItem title={comp.title} amount={comp.amount} date={comp.date} />
      ))}
    </div>
  );
}

export default Expense;
