import Link from "next/link";
import React from "react";
import Image from "next/image";
import dimsumAndriaLogo from "@/public/dimsumandria.png";

const links = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "Menu", path: "/menu" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer id="Footer" className="py-6 bg-neutral-900">
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-2xl font-semibold text-neutral-100"
          >
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <Image
                src={dimsumAndriaLogo}
                alt="Dimsum Andria Logo"
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="flex gap-1">
              <span className="text-white font-brush">Dimsum</span>
              <span className="text-primary-500 font-brush">Andria</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-neutral-900 dark:text-white">
            {links.map(({ id, title, path }) => (
              <Link key={id} className="hover:underline" href={path}>
                {title}
              </Link>
            ))}
          </div>
          <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
            Developed By{" "}
            <Link
              className="hover:underline"
              href={"https://www.instagram.com/farreltirtawinata/"}
            >
              @farreltirtawinata
            </Link>{" "}
            © 2024 All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
