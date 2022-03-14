import React, { ReactChild } from "react";

interface ICardProps {
  children: ReactChild[];
}

export default function Card({ children }: ICardProps) {
  return <div className="m-card">{children}</div>;
}
