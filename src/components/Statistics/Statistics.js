import stl from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={stl.statistics}>
      {title.length > 0 && <h2 className={stl.title}>{title}</h2>}
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
