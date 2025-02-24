import { Compare } from "@/components/ui/compare";
import Image from "next/image";

export default function CompareDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Compare
          firstImage="/dash-black.png"
          secondImage="/desk-white.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[400px] md:h-[500px] md:w-[600px]"
          slideMode="hover"
        />
        <h1 className="text-2xl font-bold mb-4 text-white">Dark Mode:</h1>
        <p className="text-center md:text-left text-white max-w-xs">
          Enjoy a comfortable viewing experience with dark mode.
        </p>
      </div>

    </div>
  );
}
