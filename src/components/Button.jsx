const buttonVariants = {
  digit:
    "bg-mist-800/60 hover:bg-mist-800/80 border-mist-800 aspect-square shadow-mist-800",

  operator:
    "bg-sky-900/60 hover:bg-sky-900/80 border-sky-900 aspect-square shadow-sky-900",

  clear:
    "bg-red-900/60 hover:bg-red-900/80 border-red-900 col-span-2 shadow-red-900",

  delete:
    "bg-red-900/60 hover:bg-red-900/80 border-red-900 aspect-square shadow-red-900",

  wide: "bg-mist-800/60 hover:bg-mist-800/80 border-mist-800 col-span-2 shadow-mist-800",
};

const Button = ({ children, variant = "digit", ariaLabel, onClick }) => {
  const buttonVariant = buttonVariants[variant] ?? buttonVariants.digit;

  return (
    <button
      className={`text-lg rounded-md border-2 p-1 cursor-pointer shadow-xs transition-colors duration-300 ${buttonVariant}`}
      aria-label={ariaLabel ? ariaLabel : undefined}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
