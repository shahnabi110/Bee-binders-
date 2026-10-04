import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, href, className = "", variant = "primary", disabled, ...props }: ButtonProps) {
  const baseStyles = "storybook-button px-6 py-3";
  let variantStyles = "";
  
  if (disabled) {
    variantStyles = "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none border-gray-400";
  } else if (variant === "primary") {
    variantStyles = "bg-honey text-ink";
  } else if (variant === "secondary") {
    variantStyles = "bg-sky text-ink";
  } else if (variant === "outline") {
    variantStyles = "bg-cream border-4 border-ink text-ink hover:bg-honey/20";
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
