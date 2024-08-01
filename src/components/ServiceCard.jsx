import { BsFuelPumpFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdEmojiTransportation } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";

const ServiceCard = ({ service }) => {
  const iconMap = {
    "Hassle-Free Refueling": BsFuelPumpFill,
    "Safe Storage Solutions": BsFillBoxSeamFill,
    "Convenient Transportation": MdEmojiTransportation,
    "Modern Amenities": GiSofa,
    "Attentive Ground Support": ImPower,
    "Peace of Mind": MdOutlineSecurity,
  };

  const Icon = iconMap[service.title];

  const { title, subtitle, id } = service;

  return (
    <a
      href={`#${id}`}
      className="relative overflow-hidden cursor-pointer p-5 bg-white border-l-8 border-main-red rounded-xl group"
    >
      <div className="bg-main-red absolute h-full w-full top-0 duration-300 right-full group-hover:right-0 z-10"></div>
      <h2 className="relative font-medium text-2xl z-20 group-hover:text-white duration-100">
        {title}
      </h2>
      <p className="relative text-gray-500 text-lg z-20 group-hover:text-gray-200 duration-100">
        {subtitle}
      </p>
      <Icon className="absolute right-2 text-main-red/20 size-24 -bottom-1 group-hover:text-white/20 z-20 duration-100" />
    </a>
  );
};

export default ServiceCard;
