import Image from "next/image";
import About1 from "@/public/about1.png";
import About2 from "@/public/about2.png";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "./ScrollAnimated";

export default function About() {
  return (
    <>
      <section id="About" className="bg-light-ivory py-section">
        <ScrollAnimated variant="left" className="container container--sm">
          <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-2">
            <ScrollAnimated
              variant="right"
              className="font-light text-neutral-800 sm:text-lg"
            >
              <h2 className="relative mb-4 heading-second text-neutral-900">
                <span className="relative z-10">About us</span>
              </h2>

              <p className="mb-2 text-lg font-bold">
                Dimsum Andria – Kelezatan dalam Setiap Gigitan
              </p>
              <p className="text-base">
                Berawal dari kecintaan terhadap kuliner Asia, kami berkomitmen
                untuk menyajikan dimsum halal dengan standar kebersihan dan
                kualitas tinggi. Dari Pangsit Udang Goreng yang renyah hingga
                Lumpia Udang Kulit Tahu yang gurih, kami menawarkan berbagai
                varian dimsum yang cocok dinikmati kapan saja.
              </p>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/about">
                  <Button variant="primary">Learn more</Button>
                </Link>
                <Link href="/about#staff">
                  <Button variant="outlined">Our Team</Button>
                </Link>
              </div>
            </ScrollAnimated>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full mb-8 rounded-lg">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={About1}
                  alt="Dimsum Andria - About 1"
                />
              </div>
              <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={About2}
                  alt="Dimsum Andria - About 2"
                />
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </section>
    </>
  );
}
