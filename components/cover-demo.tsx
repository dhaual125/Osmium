import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6">
        {/* Apply black color to 'Accleration' */}
        <Cover className="text-black">
          Acclerate
        </Cover>
        <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          Your learning
        </span>
        <br />
        <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
          Like never before <br /> <br />
        </span>
        <span className="text-[24px]">
  Osmium helps you stay ahead by predicting exam patterns, <br />
  finding the best lectures, and giving you smart insights for better preparation.
</span>



      </h1>
    </div>
  );
}
