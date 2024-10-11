import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
        className="dark:bg-zinc-950"
      />
      <Card
        className="bg-zinc-900"
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        className="dark:bg-zinc-800"
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        className="bg-zinc-700"
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
      <Card
        className="bg-zinc-600"
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
  className,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} col-span-4 rounded border border-zinc-300 dark:border-zinc-400 p-4`}
    >
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-sm text-zinc-400">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>

        <span
          className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold bg-zinc-100 ${
            trend === "up"
              ? "text-green-700"
              : "text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-300">{period}</p>
    </div>
  );
};

export default StatCards;
