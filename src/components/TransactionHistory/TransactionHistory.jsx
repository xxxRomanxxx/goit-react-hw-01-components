import PropTypes from 'prop-types';
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

TransactionHistory.protTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};