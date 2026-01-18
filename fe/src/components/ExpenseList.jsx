import { deleteTransaction } from "../services/api";

export default function ExpenseList({ transactions, refresh }) {
  return (
    <div className="mt-4 bg-white p-4 rounded-2xl shadow-md">
      <h2 className="font-semibold text-lg mb-2">
        Daftar Transaksi
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">Belum ada transaksi</p>
      ) : (
        <ul className="divide-y">
          {transactions.map((t) => (
            <li key={t.id} className="py-2 flex justify-between items-center">
              <div>
                <p className="font-semibold">{t.title}</p>
                <p className="text-sm text-gray-500">{t.category}</p>
              </div>

              <div className="flex items-center gap-4">
                <p
                  className={`font-bold ${
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Rp {t.amount.toLocaleString()}
                </p>

                <button
                  onClick={async () => {
                    await deleteTransaction(t.id);
                    refresh();
                  }}
                  className="text-sm text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
