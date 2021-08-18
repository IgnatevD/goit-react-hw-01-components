import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table classNameName={s.transaction}>
      <thead classNameName={s.thead}>
        <tr classNameName={s.tr}>
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
