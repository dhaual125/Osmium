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

      <div className="w-full max-w-6xl mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Introduction to Mobile App</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a2e] text-white p-4 rounded-3xl shadow-lg">
            <div className="relative w-full h-[800px] overflow-hidden rounded-2xl">
              <Image
                src="/home.png"
                alt="Card 1"
                className="object-cover rounded-2xl"
                fill
              />
            </div>
            <p className="mt-2 text-center"> Course </p>
          </div>
          <div className="bg-[#1a1a2e] text-white p-4 rounded-3xl shadow-lg">
            <div className="relative w-full h-[800px] overflow-hidden rounded-2xl">
              <Image
                src="/mock.png"
                alt="Card 2"
                className="object-cover rounded-2xl"
                fill
              />
            </div>
            <p className="mt-2 text-center">Mock Test</p>
          </div>
          <div className="bg-[#1a1a2e] text-white p-4 rounded-3xl shadow-lg">
            <div className="relative w-full h-[800px] overflow-hidden rounded-2xl">
              <Image
                src="/course.png"
                alt="Card 3"
                className="object-cover rounded-2xl"
                fill
              />
            </div>
            <p className="mt-2 text-center">Basic Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
