const ServiceCard = ({ service }) => {
  const { title, subtitle } = service;
  return (
    <div className="border border-black p-5 bg-white text-center">
      <h2 className="font-medium text-xl">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default ServiceCard;
