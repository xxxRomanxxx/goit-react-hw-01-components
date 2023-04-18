import ProtTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export const TransactionHistory = items => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr className={css.table}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.items.map(({id, type, amount, currency}) => (
<tr className={css.table} key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
  ))}
  </tbody>
</table>
  )
}

TransactionHistory.ProtTypes = {
    type: ProtTypes.string.isRequired,
    amount: ProtTypes.number.isRequired,
    currency: ProtTypes.string.isRequired,
}