import React from "react";
import Typography from "./Typography";
interface IListElement {
  children: string;
}

export default function ListElement({ children }: IListElement) {
  return (
    <div className="m-list-item">
      <Typography size="16px" lineHeight="24px" fontWeight={400}>
        {children}
      </Typography>
    </div>
  );
}
