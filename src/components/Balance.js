import React from 'react'

export default function Balance({transactions}) {

    console.log(transactions)
   const amount = transactions.map((transaction) => Number(transaction.amount))
   const total = amount.reduce((acc, item) => (acc + item))
  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}
