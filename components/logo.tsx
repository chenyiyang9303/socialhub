"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src="/icon-192.png"
        alt="logo"
        width={50}
        height={50}
      />
      <span className="font-medium text-black dark:text-white">Aethermetrics</span>
    </Link>
  );
};
