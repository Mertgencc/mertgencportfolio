import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative pr-3">
      <div className="absolute inset-2 animate-gradient opacity-50"></div>
      <div className="relative">
        <div className="px-0 -mx-2">
          <Image
            src="/header.svg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
}
