import { useState } from "react";

const ScheduleClassButton = ({
  name,
  comp,
  classCardComp,
  setClassCardComp,
}) => {
  const [isClick, setIsClick] = useState(false);

  const onClickToggle = () => {
    if (isClick) {
      setIsClick(false);

      const temp = classCardComp.filter((v, i) => {
        return v !== comp;
      });
      // 조건에 맞는곳에 빈 배열 추가해 주므로써 삭제
      setClassCardComp(temp);
    } else {
      setIsClick(true);
      setClassCardComp([...classCardComp, comp]);
      // ...에 기존classCardComp에 더하기(여기선 더하기가 , 임)클릭한 배열 comp
    }
  };

  return (
    <li
      className={`py-2 px-3 border rounded-md ${
        isClick && "border-techit-main text-techit-main bg-[#fff7ed]"
      }`}
      onClick={onClickToggle}
    >
      {name}
    </li>
  );
};

export default ScheduleClassButton;
