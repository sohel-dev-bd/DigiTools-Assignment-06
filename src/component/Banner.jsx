import BannerImage from "../assets/banner.png";
import PlayIcon from "../assets/Play.png";
const Banner = () => {
  return (
    <div className="relative max-w-11/12 mx-auto flex items-center overflow-hidden mt-14">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-black text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="text-[#101727]">
              All the AIs You Need
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className=" bg-[#9514FA] hover:bg-red-500 transition-all px-4 py-3 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Explore Products
            </button>
            <button className="bg-red-600 hover:bg-[#4F39F6] transition-all px-4 py-3 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
                 <img src={PlayIcon} alt="" />   Watch Demo
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;