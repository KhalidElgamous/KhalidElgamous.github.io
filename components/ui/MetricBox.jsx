const MetricBox = ({ value, label }) => (
  <div className="metric-box">
    <h2>{value}</h2>
    <p>{label}</p>
  </div>
);

export default MetricBox;
