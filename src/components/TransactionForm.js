import React, { useState } from "react";

const TransactionForm = ({ onAddTrasaction }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, SetAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount),
    };
    onAddTrasaction(newTransaction);
    setDate("");
    setDescription("");
    setCategory("");
    SetAmount("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => SetAmount(e.target.value)}
        />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
