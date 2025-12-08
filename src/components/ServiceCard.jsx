import { BsFuelPumpFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdEmojiTransportation } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const iconMap = {
    "Hassle-Free Refueling": BsFuelPumpFill,
    "Safe Storage Solutions": BsFillBoxSeamFill,
    "Convenient Transportation": MdEmojiTransportation,
    "Modern Amenities": GiSofa,
    "Attentive Ground Support": ImPower,
    "Peace of Mind": MdOutlineSecurity,
    "Propeller balancing": FaBalanceScale,
    "Control surface balancing": FaBalanceScale,
  };

  const Icon = iconMap[service.title];

  const { title, subtitle, id } = service;

  return (
    <a
      href={`#${id}`}
      className="relative overflow-hidden cursor-pointer p-5 bg-white border-l-8 border-main-color rounded-xl group"
    >
      <div className="bg-main-color opacity-30 group-hover:opacity-90 absolute h-full w-full top-0 duration-300 right-full group-hover:right-0 z-10"></div>
      <h2 className="relative font-medium text-2xl z-20 group-hover:text-white duration-100">
        {title}
      </h2>
      <p className="relative text-gray-500 text-base z-20 group-hover:text-gray-100 duration-200">
        {subtitle}
      </p>
      <Icon className="absolute right-2 text-main-color/20 size-24 -bottom-1 group-hover:text-white/20 z-20 duration-100" />
    </a>
  );
};

export default ServiceCard;
