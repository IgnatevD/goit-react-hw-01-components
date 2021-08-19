import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
