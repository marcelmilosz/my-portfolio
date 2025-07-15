import React from "react";

type ButtonProps = {
  children: React.ReactNode
  onClick?: unknown
};

export function Button({ children, onClick, }: ButtonProps) {

  const buttonBase = "bg-white p-4 cursor-pointer"

  return <button className={`${buttonBase}`}>{children}</button>;
}

