const MetricBox = ({ value, label }) => (
  <div className="rounded-2xl border border-line bg-white/[0.02] p-5 xl:p-[25px]">
    <h2 className="mb-[5px] text-[28px] font-extrabold text-accent xl:text-[36px]">
      {value}
    </h2>
    <p className="text-[13px] font-medium leading-[1.8] text-fg xl:text-[14px]">
      {label}
    </p>
  </div>
);

export default MetricBox;
