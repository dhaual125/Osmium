import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Compare
          firstImage="https://i.ytimg.com/vi/QZKJrRt7gAs/maxresdefault.jpg"
          secondImage="https://fossbytes.com/wp-content/uploads/2017/04/youtube-dark-mode-1.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[50px] w-[200px] md:h-[400px] md:w-[400px]"
          slideMode="hover"
        />
              <h1 className="text-2xl font-bold mb-4 text-white">Dark Mode: </h1>
              <br /> 

        <p className="text-center md:text-left text-white max-w-xs">
          Enjoy a comfortable viewing experience with dark mode.
        </p>
      </div>
      
      {/* Cards Section */}
      <div className="w-full max-w-5xl mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Introduction to Mobile App</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img src="/dhraval.jpeg" alt="Card 1" className="w-full h-40 object-cover rounded-md" />
            <p className="mt-2">Card 1 description</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img src="/suman.png" alt="Card 2" className="w-full h-40 object-cover rounded-md" />
            <p className="mt-2">Card 2 description</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img src="/varun.jpeg" alt="Card 3" className="w-full h-40 object-cover rounded-md" />
            <p className="mt-2">Card 3 description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
