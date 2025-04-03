import Image from "next/image";
import { poppins } from "@/app/fonts";

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center h-screen ${poppins.className}`}>
      <div className="flex flex-col items-center justify-center"></div>
      <h1 className="text-7xl font-bold p-5 text-center">🐝🛠️</h1>
        <h1 className={`${poppins.className} text-7xl font-semibold p-5 text-center text-nlb`}>MUNCIȚI MUNCIȚI ALBINUȚELE MELE</h1>
        <Image
          src="/selfie_me.jpg"
          alt="Selfie"
          width={500}
          height={300}
          priority
      />
    </div>
  );
}
