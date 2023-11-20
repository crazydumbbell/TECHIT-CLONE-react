const KdtCard = ({ image, title, ing, desc, period }) => {
  return (
    <div className="w-[290px] h-[416px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 duration-300 rounded-lg"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className="pt-4">
        <span
          className={`text-sm font-semibold border py-1 px-2 rounded-[4px] ${
            ing === "모집중" && "text-[#1d4ed8] border-[#1d4ed8]"
          } ${ing === "사전알림신청" && "text-[#059669] border-[#059669]"} ${
            ing === "모집마감" && "text-[#3f3f46] border-[#3f3f46]"
          }`}
        >
          {ing}
        </span>
        <h3 className="pt-4 py-2 text-xl font-semibold">{title}</h3>
        <h5 className="text-xl">{desc}</h5>
        <div className="text-techit-gray-100 mt-4">{period}</div>
      </div>
    </div>
  );
};

export default KdtCard;
