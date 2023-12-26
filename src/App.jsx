import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <AddExpense></AddExpense>
      <ExpenseList></ExpenseList>
      {/* <AddEntry /> */}
      {/* <Listing /> */}
    </div>
  );
}

export default App;
