const BannerImage = ({ img, title, info }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#000]">
        <div className="absolute -translate-y-1/2 top-1/2 flex flex-col gap-6 ml-20">
          <p className="text-5xl text-slate-100 font-bold w-[290px] leading-[54px]">
            {title}
          </p>
          <p className="text-gray-50 w-[50%] ">{info}</p>
          <div className="flex gap-6">
            <button className="px-4 py-2 text-white bg-[#FF3811] rounded">
              Dicover More
            </button>
            <button className="px-4 py-2 border rounded text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <img
        className="h-[300px] md:h-[500px] lg:h-[700px]  w-full"
        src={img}
        alt="img1"
      />
    </div>
  );
};

export default BannerImage;
