from pydantic import BaseModel
from typing import Literal

class TransactionBase(BaseModel):
    title: str
    category: str
    amount: float
    type: Literal["income", "expense"]

class TransactionCreate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int
