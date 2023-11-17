const BannerCard = ({ desc, title, image }) => {
  return (
    <li className="relative h-[500px] ">
      <div className="container h-full flex flex-col justify-center ">
        {/* 이 3개는 그냥 외우자 */}
        <h3 className="text-[32px] font-bold">{title}</h3>
        <h5 className="text-[18px] mt-2 ab">{desc}</h5>
      </div>
      <img
        className="absolute top-0 left-0 object-cover -z-10 h-full w-full"
        src={`./images/${image}.webp`}
        alt={image}
      />
    </li>
  );
};

export default BannerCard;
