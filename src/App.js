import React, { useState } from "react";
import "./App.css";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchOption from "./components/Search";
import DisplayHeader from "./components/Header";

function App() {
  const [transactions, setTransaction] = useState([
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99,
    },
    {
      date: "2019-12-06",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 8.75,
    },
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: -17.59,
    },
  ]);

  const addTransaction = (newTransaction) => {
    setTransaction([...transactions, newTransaction]);
  };
  return (
    <div>
      <DisplayHeader />
      <SearchOption />
      <TransactionForm onAddTrasaction={addTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
