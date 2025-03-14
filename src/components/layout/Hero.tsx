"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import bg from "@/public/bghome.jpg";
import Link from "next/link";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "../ui/SocialLink";
import Animated from "./Animated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded, animationControls]);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section
      id="Hero"
      className="relative w-full h-screen bg-right bg-no-repeat bg-cover bg-neutral-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 z-10 w-full h-full",
          isMobile
            ? "bg-gradient-to-r from-neutral-900 to-neutral-900/40"
            : "bg-gradient-to-r from-neutral-900"
        )}
      ></div>
      <motion.div
        initial={"hidden"}
        animate={animationControls}
        variants={animationVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        {(!isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover w-full transition z-1"
            src={bg}
            fill
            onLoad={() => setLoaded(true)}
            priority
            placeholder="blur"
            alt="Lorem ipsum dolor"
          />
        )}
        {(isMobile || isMobile === undefined) && (
          <Image
            className="absolute top-0 left-0 object-cover object-left w-full transition z-1"
            src={bg}
            fill
            onLoad={() => setLoaded(true)}
            priority
            alt="Lorem ipsum dolor"
          />
        )}
      </motion.div>
      <div className="container z-10 w-full h-full mx-auto">
        <div className="grid w-full h-full max-w-full mx-auto md:grid-cols-2">
          <div className="z-10 flex flex-col self-center justify-between h-full max-w-xs py-8 sm:max-w-sm md:max-w-xl">
            <div></div>
            <div>
              <Animated
                type="spring"
                delay={1.0}
                duration={0.8}
                variant={"top-sm"}
              ></Animated>
              <Animated
                as="h1"
                delay={0.4}
                variant={"top-sm"}
                className="mb-4 heading-first text-neutral-200"
              >
                Authentic Taste
                <br />
                <span className="text-primary-500">in Every Bite</span>
              </Animated>
              <Animated as="p" delay={0.6} variant="top-sm">
                Dimsum Andria menghadirkan cita rasa autentik dengan bahan-bahan
                berkualitas tinggi. Setiap gigitan menghadirkan kelezatan dimsum
                yang lembut dan kaya rasa, dibuat dengan resep tradisional yang
                telah disempurnakan.
              </Animated>
              <Animated delay={0.9} className="flex flex-row gap-8 mt-8">
                <Link href="/menu#menu">
                  <Button variant="primary">Explore menu</Button>
                </Link>
                {/* <Button variant="outlined">Secondary</Button> */}
              </Animated>
            </div>
            <div className="flex flex-row items-center gap-8 left-40 bottom-20">
              <Animated
                type="spring"
                delay={1.2}
                duration={0.5}
                variant="top-sm"
              >
                <SocialLink
                  variant="instagram"
                  url="https://www.instagram.com/dimsumandria/"
                />
              </Animated>
              <Animated
                type="spring"
                delay={1.35}
                duration={0.5}
                variant="top-sm"
              >
                <SocialLink
                  variant="tiktok"
                  url="https://www.tiktok.com/@dimsumandria"
                />
              </Animated>
              <Animated
                type="spring"
                delay={1.5}
                duration={0.5}
                variant="top-sm"
              >
                <SocialLink
                  variant="whatsapp"
                  url="https://whatsapp.com/channel/0029VaOvmVDJZg4DYF8ShE13"
                />
              </Animated>

              <Animated
                variant="left"
                delay={1.4}
                className="w-80 h-[1px] bg-neutral-500"
              ></Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
