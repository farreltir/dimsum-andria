import Image from "next/image";
import React from "react";
import CardTestimonial from "../modules/CardTestimonial";

const testimonials = [
  {
    id: 0,
    name: "viannie sachi",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Dimsum nya yummy... enakkk deh pokoknya chili oilnya pas gak terlalu pedas jadi enak bgt dimakan sama dimsum siomay uangnya full udang dan terasa udangnya fresh..",
  },
  {
    id: 1,
    name: "kezia Lee",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "SEMUANYA ENAK?!?! dimsum nori nya jg enak bgt karna beda dr dimsum biasa dan siomay udangnya best bgt!!",
  },
  {
    id: 2,
    name: "Bman Gnote",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "mantap banget, temenku suka rasanya enak, saus sama chili oil nya juga pas",
  },
];

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="bg-light-ivory py-section">
      <div className="container container--sm">
        <h2 className="mb-8 text-2xl font-semibold text-center capitalize font-brush lg:mb-12 text-neutral-800 lg:text-3xl">
          Customer Top Reviews
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map(({ id, content, name, avatarUrl }) => {
            return (
              <CardTestimonial
                key={id}
                content={content}
                name={name}
                avatarUrl={avatarUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
