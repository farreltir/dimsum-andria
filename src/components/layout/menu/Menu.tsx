"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

const menu = {
  sushi: [
    {
      id: 1,
      title: "Dimsum Original 10 pcs / 20 pcs / 40 pcs / 100 pcs",
      price: 37,
      category: "sushi",
      description: "Dimsum Ayam Topping Mix Tuna Wortel Beef Udang Jamur",
    },
    {
      id: 2,
      title: "Dimsum Kulit Kuning 10 pcs",
      price: 37,
      category: "sushi",
      description: "Dimsum Ayam Dengan Topping Caviar",
    },
    {
      id: 3,
      title: "Dimsum Rumput Laut / Nori 10 pcs",
      price: 35,
      category: "sushi",
      description: "Dimsum Ayam Dengan Kulit Rumput Laut",
    },
    {
      id: 4,
      title: "Dimsum Lumpia Ayam Kulit Tahu 10pcs",
      price: 37,
      category: "sushi",
      description: "Lumpia Ayam Dibalut Dengan Kulit Tahu",
    },
    {
      id: 5,
      title: "Hakau udang 10 pcs",
      price: 55,
      category: "sushi",
      description: "Hakau udang isi 10 pcs, pakai udang utuh fresh",
    },
    {
      id: 6,
      title: "Siomay Udang (bite size) 10 pcs",
      price: 30,
      category: "sushi",
      description: "BITE SIZE Siomay Full Udang 10 Pcs",
    },
    {
      id: 7,
      title: "Ceker Bumbu tausi 500gr",
      price: 60,
      category: "sushi",
      description: "Ceker Ayam Empuk Dengan Saus Tausi Premium Berisi 3 Pcs",
    },
    {
      id: 8,
      title: "Lomaikai isi 6 pcs",
      price: 50,
      category: "sushi",
      description:
        "6 Pcs Lo Mai Kai Nasi Ketan. Terbungkus Daun Teratai Dengan Isian Ayam Dan Telur Asin",
    },
    {
      id: 9,
      title: "Pao isi 6 pcs per varian",
      price: 38,
      category: "sushi",
      description: "Pao Ayam Cashiu / Coklat / Telur asin / Tausa",
    },
  ],
  ramen: [
    {
      id: 1,
      price: 43,
      category: "ramen",
      title: "Lumpia Udang Kulit Tahu (8pcs)",
      description: "Lumpia Isi Udang Ukuran Sedang Seperti Di Restoran",
    },
    {
      id: 2,
      price: 43,
      category: "ramen",
      title: "Pangsit Udang Goreng Mayonaise (8pcs)",
      description: "Pangsit Isi Udang",
    },
    {
      id: 3,
      price: 59,
      category: "ramen",
      title: "Cakwe Udang Goreng Mayonaise (3pcs)",
      description: "Cakwe Udang Goreng Siap santap dengan Sambal Dan Mayonaise",
    },
    {
      id: 4,
      price: 43,
      category: "ramen",
      title: "Ekkado Ayam (8 pcs)",
      description: "Ekkado Goreng Dengan Isi Daging Ayam Dan Telur Puyuh",
    },
    {
      id: 5,
      price: 50,
      category: "ramen",
      title: "Pizza Pie (6 pcs)",
      description: "Fried Pizza Pie isi sosis dan ayam 6 Pcs",
    },
    {
      id: 6,
      price: 50,
      category: "ramen",
      title: "Choco Banana Pie (6 pcs)",
      description:
        "Fried choco banana pie isi 2 pcs. Cocok untuk yang suka cemilan manis",
    },
    {
      id: 7,
      price: 35,
      category: "ramen",
      title: "Melted Mozzarella (10 pcs)",
      description: "Fried mozzarella stick 10 pcs",
    },
    {
      id: 8,
      price: 35,
      category: "ramen",
      title: "Brulle Bomb (10 pcs)",
      description:
        "Brulee Bomb Adalah olahan Susu, Keju Dan Smoke Beef Dengan Rasa Crunchy Diluar Dan Lumer Di Dalam",
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabsStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Our Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.sushi?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 1 &&
          menu.ramen?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
      </div>
    </section>
  );
}
