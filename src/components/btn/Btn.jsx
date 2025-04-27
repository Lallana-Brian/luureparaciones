import { useNavigate } from "react-router-dom";

const Btn = ({
  onClick,
  text = "Botón",
  textColor = "text-black",
  bgColor = "bg-button",
  hoverBgColor = "hover:bg-buttonHover",
  borderColor = "border-button",
  className = "",
  to = "",
  hoverUnderline = false,
  disableHover = false,
  hoverTextColor = "hover:text-white",
}) => {
  const navigate = to ? useNavigate() : null;

  const handleClick = () => {
    if (onClick) onClick();
    if (to && navigate) navigate(to);
  };

  const buttonClasses = `
    px-6 py-4
    text-lg sm:text-xl
    mt-4 sm:mt-0
    rounded-lg
    border-2 border-solid
    transition-colors duration-300
    ${bgColor}
    ${textColor}
    ${borderColor}
    ${disableHover ? "" : hoverBgColor}
    ${disableHover ? "" : hoverTextColor} 
    ${hoverUnderline ? "hover:underline" : ""}
    ${className}
  `;

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Btn;
