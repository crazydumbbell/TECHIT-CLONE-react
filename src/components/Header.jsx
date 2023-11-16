const Header = () => {
  return (
    <header className="bg-white h-16 border-b sticky top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-36 h-16 p-6">
            <img
              src="https://techit.education/img/techit_logo.svg"
              alt="techit_logo_alt"
            />
            {/* 홈페이지 계발자 도구에서 이미지 클릭해서 src 들어가서 복사 붙여넣기 -> 홈에피지에서 이미지 따옴 */}
          </div>
          <ul className="hidden lg:flex">
            <li className="header-menu ">테킷 스쿨</li>
            <li className="header-menu relative">
              <div className="absolute right-2 -top-3 w-4 h-4 flex justify-center items-center rounded-full bg-[#ef4444] text-[10px] text-white">
                N
              </div>
              온보딩 트랙
            </li>
            <li className="header-menu">스타트업 스테이션</li>
            <li className="header-menu border-r">이벤트</li>
            <li className="header-menu">기업 해커톤</li>
          </ul>
        </div>
        <div>로그인</div>
      </div>
    </header>
  );
};

export default Header;
