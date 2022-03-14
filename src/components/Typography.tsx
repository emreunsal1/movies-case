import React from "react";

interface ITypography {
  children: string;
  fontWeight: number;
  size: string;
  lineHeight: string;
}

export default function Typography({ children, fontWeight, size, lineHeight }: ITypography) {
  return (
    <div className={"typography"} style={{ fontWeight: fontWeight, fontSize: size, lineHeight: lineHeight }}>
      {children}
    </div>
  );
}
