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
    variantStyles = "bg-honey text-ink border border-honey";
  } else if (variant === "secondary") {
    variantStyles = "bg-sky text-ink border border-sky";
  } else if (variant === "outline") {
    variantStyles = "bg-white border border-gray-200 text-ink hover:bg-gray-50";
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
