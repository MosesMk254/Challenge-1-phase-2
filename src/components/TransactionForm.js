import React from "react";

const TransactionForm = () => {
  return (
    <div>
      <form>
        <label>Date</label>
        <input type="date" />

        <input type="text" placeholder="Description" />

        <input type="text" placeholder="Category" />

        <input type="number" placeholder="Amount" />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
