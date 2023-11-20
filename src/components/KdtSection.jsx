import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const kdtCardData = [
  {
    image: "kdt_android",
    ing: "모집중",
    title: "앱 스쿨 : Android",
    desc: "탄탄한 기본기와 프로젝트 경험을 갖춘 온리원 앱 개발자로 성장하는 과정",
    period: "23.11.01(수) ~ 23.11.30(목) 까지",
  },
  {
    image: "kdt_design",
    ing: "사전알림신청",
    title: "디자인 스쿨",
    desc: "경쟁력 있는 커리어의 시작, 프로젝트 중심 UX/UI 교육",
    period: "",
  },
  {
    image: "kdt_backend_python",
    ing: "사전알림신청",
    title: "백엔드 스쿨 : Python",
    desc: "파이썬으로 배우는 백엔드 / 데브옵스 선택형 과정",
    period: "",
  },
  {
    image: "kdt_data",
    ing: "사전알림신청",
    title: "데이터 분석 스쿨",
    desc: "기본기가 탄탄한 데이터 분석가로의 도약",
    period: "",
  },
  {
    image: "kdt_backend_plus",
    ing: "사전알림신청",
    title: "백엔드 스쿨 플러스",
    desc: "백엔드 개발자로의 한 끗 성장을 위한 라스트마일 과정",
    period: "",
  },
  {
    image: "kdt_frontend_plus",
    ing: "사전알림신청",
    title: "프론트엔드 스쿨 플러스",
    desc: "프론트엔드 개발자로의 한끗 성장을 위한 라스트마일 과정",
    period: "",
  },
  {
    image: "kdt_blockchain",
    ing: "사전알림신청",
    title: "블록체인 스쿨",
    desc: "미래를 바꿀 대체불가한 개발자의 시작",
    period: "",
  },
  {
    image: "kdt_ai",
    ing: "모집마감",
    title: "AI 스쿨",
    desc: "AI 역량을 발전시키는 실습 중심의 교육과 프로젝트",
    period: "23.08.01(화) ~ 23.08.31(목) 까지",
  },
  {
    image: "kdt_backend_java",
    ing: "모집마감",
    title: "백엔드 스쿨 : Java",
    desc: "Java부터 Spring까지 확실한 커리큘럼",
    period: "23.10.01(일) ~ 23.10.31(화) 까지",
  },
  {
    image: "kdt_frontend",
    ing: "모집마감",
    title: "프론트엔드 스쿨",
    desc: "수료생 99%가 추천하는 프론트엔드 집중 부트캠프 테킷 프론트엔드 스쿨",
    period: "23.10.01(일) ~ 23.10.31(화) 까지",
  },
  {
    image: "kdt_ios",
    ing: "모집마감",
    title: "앱 스쿨 : iOS",
    desc: "iOS개발, UX/UI, 앱 배포까지 실무에 가장 가까운 iOS 앱 부트캠프",
    period: "23.10.01(일) ~ 23.10.31(화) 까지",
  },
];
// kdtCardData맵합수로 받을때 위에서부터 v=0번우로 시작

const KdtSection = () => {
  return (
    <section className="mt-20 bg-green-100 container">
      <TitleBar title="KDT 테킷 스쿨" desc="K-Digital Training 부트캠프" />
      <div className="bg-purple-100 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center mt-10">
        {kdtCardData.map((v, i) => (
          <KdtCard
            key={i}
            image={v.image}
            title={v.title}
            ing={v.ing}
            desc={v.desc}
            period={v.period}
          />
        ))}
      </div>
    </section>
  );
};

export default KdtSection;
