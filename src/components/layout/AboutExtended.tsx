import Image from "next/image";
import Aboute1 from "@/public/aboute1.png";
import Aboute2 from "@/public/aboute2.png";

export default function AboutExtended() {
  return (
    <>
      <section id="AboutExtended" className="bg-light-ivory py-section">
        <div className="container container--xs">
          <div className="grid gap-4 md:grid-cols-2">
            <Image
              className="self-end w-full h-fit justify-self-end rounded-custom--lg"
              width={384}
              height={256}
              src={Aboute1}
              loading="lazy"
              alt=""
            />

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">
                Our
                <br />
                History
              </h2>
              <div className="space-y-4 text-neutral-600 ">
                <p>
                  Setiap hidangan yang kami sajikan dibuat dengan bahan-bahan
                  pilihan dan resep yang telah dikembangkan dengan penuh
                  dedikasi. Dari awal berdiri hingga sekarang, kami terus
                  menjaga standar kualitas dan memberikan pengalaman kuliner
                  terbaik bagi pelanggan kami.
                </p>

                <p>
                  Kami selalu ingin menghadirkan kelezatan dimsum halal
                  berkualitas tinggi lebih dekat ke pelanggan setia. Kini,
                  Dimsum Andria telah hadir di berbagai lokasi, termasuk Tanjung
                  Duren, Meruya, Harapan Indah, Kalimalang, Gading Serpong, dan
                  Serpong BSD.
                </p>
              </div>
            </div>

            <div className="p-8 bg-white lg:p-16 rounded-custom--lg">
              <h2 className="mb-4 heading-second text-neutral-900">About us</h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Di Dimsum Andria, kami percaya bahwa makanan bukan hanya
                  sekadar hidangan, tetapi juga pengalaman. Setiap gigitan
                  dimsum kami menghadirkan kombinasi rasa yang lezat dengan
                  tekstur yang sempurna, dibuat dengan teknik tradisional yang
                  telah diwariskan secara turun-temurun.
                </p>
                <p>
                  Kami mengundang Anda untuk menikmati berbagai pilihan dimsum
                  favorit, dari Siomay Udang yang lembut, Hakau yang kenyal,
                  hingga Lumpia Udang Kulit Tahu yang renyah. Selamat datang di
                  Dimsum Andria, tempat di mana kelezatan dan kualitas selalu
                  menjadi prioritas utama.
                </p>
              </div>
            </div>
            <Image
              className="self-start w-full h-fit justify-self-start rounded-custom--lg"
              width={384}
              height={256}
              src={Aboute2}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
