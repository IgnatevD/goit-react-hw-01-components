import stl from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  console.log(title);
  return (
    <section className={stl.statistics}>
      {title && <h2 className={stl.title}>{title}</h2>}
      <ul className={stl.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={stl.item} key={id}>
            <span className={stl.label}>{label}</span>
            <span className={stl.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
