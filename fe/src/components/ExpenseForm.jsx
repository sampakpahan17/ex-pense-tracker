import { useState } from "react";
import { addTransaction } from "../services/api";

export default function ExpenseForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      title,
      category,
      amount: parseFloat(amount),
      type,
    };
    await addTransaction(newData);
    setTitle("");
    setCategory("");
    setAmount("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="font-semibold mb-2 text-lg">Tambah Pengeluaran</h2>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Jumlah"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border w-full p-2 mb-3 rounded"
      >
        <option value="expense">Transaksi Pengeluaran</option>
        <option value="income">Transaksi Pemasukan</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Tambah
      </button>
    </form>
  );
}
