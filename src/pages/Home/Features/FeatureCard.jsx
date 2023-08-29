const FeatureCard = ({ icon, name }) => {
  return (
    <div className="border w-[150px] h-[106px] p-4 rounded-lg flex flex-col justify-center items-center hover:text-white hover:bg-[#ff3911c4]">
      {icon}
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default FeatureCard;
