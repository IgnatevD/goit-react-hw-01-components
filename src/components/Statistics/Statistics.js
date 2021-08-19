import stl from "./Statistics.module.css";
import PropTypes from "prop-types";
import StaticsItem from "../StaticsItem/StaticsItem";

const Statistics = ({ title, stats }) => {
  return (
    <section className={stl.statistics}>
      {title && <h2 className={stl.title}>{title}</h2>}
      <ul className={stl.statList}>
        <StaticsItem stats={stats} />
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
