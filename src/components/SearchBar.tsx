import React from "react";
import Image from "next/image";

interface ISearchInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: string;
}

export default function SearchInput({ placeholder, onChange, state }: ISearchInputProps) {
  return (
    <div className="m-search-bar">
      <Image src="/icons/search-icon.svg" alt="searchIcon" height={18.75} width={18.75} />
      <input type="text" value={state} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
