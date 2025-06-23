export function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick,
  disabled = false,
  type = "button",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-wood-600 text-white hover:bg-wood-700",
    outline: "border border-wood-300 bg-transparent hover:bg-wood-100",
    ghost: "hover:bg-wood-100 hover:text-wood-900",
    destructive: "bg-red-500 text-white hover:bg-red-600"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10"
  };
  
  const variantStyles = variants[variant] || variants.default;
  const sizeStyles = sizes[size] || sizes.default;
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}