from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .models import Transaction
import json, os

app = FastAPI(title="Expense Tracker API", version="1.0")

# Middleware CORS agar FE bisa akses BE
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "database.json")

# Inisialisasi file database
if not os.path.exists(DB_PATH):
    with open(DB_PATH, "w") as f:
        json.dump([], f)

def read_db():
    with open(DB_PATH, "r") as f:
        return json.load(f)

def write_db(data):
    with open(DB_PATH, "w") as f:
        json.dump(data, f, indent=4)

@app.get("/transactions/")
def get_transactions():
    return read_db()

@app.post("/transactions/")
def add_transaction(transaction: Transaction):
    data = read_db()
    data.append(transaction.dict())
    write_db(data)
    return {"message": "Transaction added"}

@app.delete("/transactions/{transaction_id}")
def delete_transaction(transaction_id: int):
    data = read_db()
    new_data = [t for t in data if t["id"] != transaction_id]
    if len(new_data) == len(data):
        raise HTTPException(status_code=404, detail="Transaction not found")
    write_db(new_data)
    return {"message": "Transaction deleted"}

@app.get("/balance/")
def get_balance():
    data = read_db()
    income = sum(t["amount"] for t in data if t.get("type") == "income")
    expense = sum(t["amount"] for t in data if t.get("type") == "expense")
    return {"income": income, "expense": expense, "balance": income - expense}
