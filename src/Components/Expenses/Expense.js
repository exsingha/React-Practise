import './Expense.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((comp) => (
        <ExpenseItem
          title={comp.title}
          amount={comp.amount}
          date={comp.date}
          key={comp.id}
        />
      ))}
    </Card>
  );
};

export default Expense;
