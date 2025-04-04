import { poppins } from "@/app/fonts";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center h-full w-full`}>
      <h1 className="text-7xl font-bold p-5 text-center">🐝🛠️</h1>
      <h1 className={`${poppins.className} text-7xl font-semibold p-5 text-center text-nlb`}>MUNCIȚI MUNCIȚI ALBINUȚELE MELE</h1>
      <div className="w-fit h-fit">
        <Spline scene="https://prod.spline.design/XUFsIrXg0YofwRdk/scene.splinecode" />
      </div>
    </div>
  );
}
