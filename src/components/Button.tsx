import React from "react";

interface IButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({ children, onClick }: IButtonProps) {
  return (
    <button className="m-button" onClick={onClick}>
      {children}
    </button>
  );
}
