"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nabvar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="text-center flex justify-between items-center w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/posts">
              <li>Posts </li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
  else{
    return <></>
  }
}
