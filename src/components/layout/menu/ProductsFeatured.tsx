import Image from "next/image";
import React from "react";
import TabsProduct from "../../modules/Product/TabsProduct";
import Product from "../../modules/Product/Product";
import BrushSVG from "../../svg/BrushSVG";
import Feature1 from "@/public/feature1.png";
import Feature2 from "@/public/feature2.png";
import Feature3 from "@/public/feature3.png";
import ZigzagSVG from "@/components/svg/ZigzagSVG";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";

const products = [
  {
    id: 1,
    price: 35,
    category: "ramen",
    imgScr: Feature1,
    title: "Dimsum Rumput Laut / Nori 10 pcs",
    description: "Dimsum Rumput Laut / Nori 10 pcs",
  },
  {
    id: 2,
    price: 55,
    category: "ramen",
    imgScr: Feature2,
    title: "Hakau udang 10 pcs",
    description:
      "Hakau udang isi 10 pcs, pakai udang utuh fresh",
  },
  {
    id: 3,
    price: 30,
    category: "ramen",
    imgScr: Feature3,
    title: "Siomay Udang (bite size) 10 pcs",
    description:
      "BITE SIZE Siomay Full Udang 10 Pcs",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function ProductsFeatured({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="ProductsFeatured"
      className={clsx("bg-neutral-900", paddingTop[pt], paddingBot[pb])}
    >
      <div className="container container--sm">
        <div className="mx-auto">
          <h1 className="relative mb-4 heading-second text-neutral-200">
            <span className="relative z-10">Resto&apos;s top picks</span>
          </h1>
          <ZigzagSVG />

          {/* TODO - change to slider */}
          <section className="mt-8 space-y-8 lg:mt-12">
            {products.map(({ id, price, imgScr, title, description }) => {
              return (
                <Product
                  key={id}
                  price={price}
                  imgSrc={imgScr}
                  title={title}
                  description={description}
                />
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
}
