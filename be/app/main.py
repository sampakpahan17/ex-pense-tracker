from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from app.models import Transaction, TransactionCreate
import json, os

app = FastAPI(title="Expense Tracker API", version="1.0")

# =========================
# CORS
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Database
# =========================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "database.json")

if not os.path.exists(DB_PATH):
    with open(DB_PATH, "w") as f:
        json.dump([], f)

def read_db():
    with open(DB_PATH, "r") as f:
        return json.load(f)

def write_db(data):
    with open(DB_PATH, "w") as f:
        json.dump(data, f, indent=4)

def sanitize(data):
    return [
        t for t in data
        if isinstance(t, dict)
        and {"id","title","category","amount","type"} <= t.keys()
    ]

# =========================
# Endpoints
# =========================

@app.get("/transactions/", response_model=List[Transaction])
def get_transactions():
    data = sanitize(read_db())
    write_db(data)
    return data

@app.post("/transactions/", response_model=Transaction)
def add_transaction(payload: TransactionCreate):
    data = sanitize(read_db())

    new_id = max([t["id"] for t in data], default=0) + 1

    new_transaction = {
        "id": new_id,
        **payload.dict()
    }

    data.append(new_transaction)
    write_db(data)
    return new_transaction

@app.delete("/transactions/{transaction_id}")
def delete_transaction(transaction_id: int):
    data = sanitize(read_db())

    if not any(t["id"] == transaction_id for t in data):
        raise HTTPException(status_code=404, detail="Transaction not found")

    data = [t for t in data if t["id"] != transaction_id]
    write_db(data)

    return {"message": "Deleted"}

@app.get("/balance/")
def get_balance():
    data = sanitize(read_db())

    income = sum(t["amount"] for t in data if t["type"] == "income")
    expense = sum(t["amount"] for t in data if t["type"] == "expense")

    return {
        "income": income,
        "expense": expense,
        "balance": income - expense
    }
