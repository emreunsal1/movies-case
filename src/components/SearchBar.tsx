import React, { useState } from "react";
import Image from "next/image";

interface ISearchInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: string;
}

export default function SearchInput({ placeholder, onChange, state }: ISearchInputProps) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={`m-search-bar ${isFocus ? "focus" : ""}`}>
      <Image src="/icons/search-icon.svg" alt="searchIcon" height={18.75} width={18.75} />
      <input
        type="text"
        value={state}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
