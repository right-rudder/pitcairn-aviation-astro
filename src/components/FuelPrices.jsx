import { BsFuelPumpFill } from "react-icons/bs";

const FuelPrices = ({
  fullServeJetAUnitPrice,
  selfServe100LLUnitPrice,
  fullServe100LLUnitPrice,
  reportDate,
}) => {
  const stats = [
    {
      type: "Self Service",
      value: `$${selfServe100LLUnitPrice}`,
      name: "100 LL",
      color: "green",
    },
    {
      type: "Full Service",
      value: `$${fullServe100LLUnitPrice}`,
      name: "100 LL",
      color: "green",
    },
    {
      type: "Self Service",
      value: `$${fullServeJetAUnitPrice}`,
      name: "Jet A",
      color: "blue",
    },
    {
      type: "Full Service",
      value: `$${fullServeJetAUnitPrice}`,
      name: "Jet A",
      color: "blue",
    },
  ];

  function formatReportDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} UTC`;
    return formattedDateTime;
  }

  const formattedDate = formatReportDate(reportDate);

  return (
    <section className="bg-main-black py-10 px-5" id="fuel-prices">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        <h2 className="text-white text-4xl uppercase">Fuel Prices</h2>
        <h3 className="text-white text-lg">
          We prioritize keeping our fuel prices competitive for your
          convenience.
        </h3>
        <dl className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`fade-up delay-100 duration-700 translate-y-10 opacity-0 flex relative overflow-hidden flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-gradient-to-b from-light-${stat.color} to-main-${stat.color} rounded-xl px-4 py-10 sm:px-6 xl:px-8`}
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
              <dd className="w-full flex-none text-5xl font-medium leading-10 tracking-tight text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-gray-400 self-end">Updated as of {formattedDate}</p>
      </div>
    </section>
  );
};

export default FuelPrices;
