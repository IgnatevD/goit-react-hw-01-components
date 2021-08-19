import stl from "./StaticsItem.module.css";
import PropTypes from "prop-types";

const StaticsItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => (
    <li className={stl.item} key={id}>
      <span className={stl.label}>{label}</span>
      <span className={stl.percentage}>{percentage}%</span>
    </li>
  ));
};

export default StaticsItem;

StaticsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
