import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

type Props = {
  variant: "instagram" | "tiktok" | "whatsapp";
  url: string;
};

const iconColors = {
  instagram: "text-neutral-400 hover:text-pink-500",
  tiktok: "text-neutral-400 hover:text-black dark:hover:text-white",
  whatsapp: "text-neutral-400 hover:text-green-500",
};

export default function SocialLink({ variant, url }: Props) {
  return (
    <Link
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 transform ${iconColors[variant]}`}
      href={url}
      target="_blank"
    >
      <span className="sr-only">{variant}</span>
      {variant === "instagram" && <FaInstagram className="w-6 h-6" />}
      {variant === "tiktok" && <FaTiktok className="w-6 h-6" />}
      {variant === "whatsapp" && <FaWhatsapp className="w-7 h-7" />}
    </Link>
  );
}
