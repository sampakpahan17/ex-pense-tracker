import { useState } from "react";
import { addTransaction } from "../services/api";

export default function ExpenseForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const submit = async (e) => {
    e.preventDefault();

    await addTransaction({
      title: form.title,
      category: form.category,
      amount: Number(form.amount),
      type: form.type,
    });

    setForm({ title: "", category: "", amount: "", type: "expense" });
    refresh();
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="font-semibold text-lg mb-2">Tambah Transaksi</h2>

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Judul"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Kategori"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />

      <input
        type="number"
        className="border p-2 w-full mb-2 rounded"
        placeholder="Jumlah"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />

      <select
        className="border p-2 w-full mb-3 rounded"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Simpan
      </button>
    </form>
  );
}
