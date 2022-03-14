import React from "react";
import Typography from "./Typography";
interface IListElement {
  children: string;
}

export default function ListElement({ children }: IListElement) {
  return (
    <div className="m-list-item">
      <Typography>{children}</Typography>
    </div>
  );
}
