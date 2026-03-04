
const Banner = () => {
  return (
    <div className="py-20 bg-gray-200 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* In-Progress Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center text-white bg-gradient-to-r from-purple-600 to-indigo-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -left-10 w-96 h-96 border border-white rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-[28rem] h-[28rem] border border-white rounded-full" />
          </div>

          <h2 className="text-xl md:text-2xl font-medium z-10">In-Progress</h2>
          <p className="text-5xl md:text-6xl font-semibold mt-6 z-10">0</p>
        </div>

        {/* Resolved Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center text-white bg-gradient-to-r from-emerald-500 to-teal-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -left-10 w-96 h-96 border border-white rounded-full" />
            <div className="absolute -bottom-16 -right-16 w-[28rem] h-[28rem] border border-white rounded-full" />
          </div>

          <h2 className="text-xl md:text-2xl font-medium z-10">Resolved</h2>
          <p className="text-5xl md:text-6xl font-semibold mt-6 z-10">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
