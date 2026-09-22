import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center container mx-auto py-20 gap-8">
      <div className="px-4 md:px-0 md:w-1/3">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>

        <p className="mt-6 text-gray-500 text-base md:text-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-linear-to-r from-orange-600 to-purple-600 text-white font-bold px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
            Explore Technologies
          </button>

          <button className="border border-gray-200 px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-2/3">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-64 sm:w-80 md:w-96 h-auto object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;