import { BsFuelPumpFill } from "react-icons/bs";

const FuelPrices = () => {
  const stats = [
    {
      type: "Self Service",
      value: "$6.20",
      name: "100 LL",
      color: "green",
    },
    {
      type: "Full Service",
      value: "$6.45",
      name: "100 LL",
      color: "green",
    },
    {
      type: "Self Service",
      value: "$6.17",
      name: "Jet A",
      color: "blue",
    },
    {
      type: "Full Service",
      value: "$6.27",
      name: "Jet A",
      color: "blue",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <dl className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex relative overflow-hidden flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-gradient-to-b from-light-${stat.color} to-main-${stat.color} rounded-xl px-4 py-10 sm:px-6 xl:px-8`}
        >
          <p className="text-white/5 absolute -bottom-3 -right-2 text-8xl font-extrabold whitespace-nowrap">
            {stat.name}
          </p>
          <div className="text-white/80 absolute bottom-2 right-3 text-3xl font-extrabold flex items-baseline gap-2">
            <BsFuelPumpFill className="size-4" />
            <p>{stat.name}</p>
          </div>
          <dt className="text-sm font-medium leading-6 text-gray-200">
            {stat.type}
          </dt>
          <dd
            className={classNames(
              stat.changeType === "negative"
                ? "text-rose-600"
                : "text-gray-700",
              "text-xs font-medium",
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-5xl font-medium leading-10 tracking-tight text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default FuelPrices;
