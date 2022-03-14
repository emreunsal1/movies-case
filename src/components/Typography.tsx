import React from "react";

interface ITypography {
  children: string;
  fontWeight?: number;
  size?: string;
  lineHeight?: string;
  style?: any;
}

export default function Typography({ children, fontWeight = 400, size = "16px", lineHeight = "24px", style = {} }: ITypography) {
  return (
    <div className="m-typography" style={{ fontWeight: fontWeight, fontSize: size, lineHeight: lineHeight, ...style }}>
      {children}
    </div>
  );
}
