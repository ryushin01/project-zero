import Footer from "../../components/Footer/Footer";
import { ReactComponent as IconGmail } from "../../assets/svg/contact/icon_gmail.svg";
import { ReactComponent as IconGithub } from "../../assets/svg/contact/icon_github.svg";
import { ReactComponent as IconVelog } from "../../assets/svg/contact/icon_velog.svg";
import { ReactComponent as IconInstagram } from "../../assets/svg/contact/icon_instagram.svg";

const Main = () => {
    return (
        <main className="w-full h-full border-8 border-solid border-[#000]">
            <div className="flex flex-col w-3/4 m-auto py-5">
                {/* About Me */}
                <section>
                    <hgroup className="flex justify-between py-5">
                        <h1 className="w-20 h-20 order-1">
                            <img
                                src="/images/logo_black.png"
                                alt="project zero logo"
                                className="w-full"
                            />
                        </h1>
                        <h2 className="text-5xl leading-tight font-bold">
                            안녕하세요,
                            <br />
                            저는 류창선입니다.
                        </h2>
                    </hgroup>
                    <h3 className="py-4 text-3xl leading-tight">
                        서울에서 마크업 개발자로 6년간 일했으며, 현재는
                        프론트엔드 개발자로 나아가기 위해 노력하고 있습니다.
                    </h3>
                    <div className="hidden">
                        <span className="text-3xl leading-tight">
                            저는 아스널 FC와 디트로이트 타이거즈를 응원하고
                            있으며, 보드 게임과 소설책 읽기, 라디오 청취와
                            캠핑을 좋아합니다.
                        </span>
                    </div>
                </section>

                {/* Career */}
                <section>
                    <ol>
                        <li className="flex gap-4 py-8">
                            <h4 className="basis-60 text-xl font-bold">
                                Front-End Developer
                            </h4>
                            <ol className="flex-1">
                                <li>
                                    <div>
                                        <h5 className="text-xl">&gt;wecode</h5>
                                        <span className="text-xs font-thin">
                                            2023.08 - 2023.11
                                        </span>
                                    </div>
                                    <div className="pt-8 pb-4">
                                        <h6 className="text-base">
                                            Description
                                        </h6>
                                        <span className="text-sm">
                                            부트캠프&nbsp;
                                            <a
                                                href="https://wecode.co.kr/"
                                                title="오프라인 부트캠프 wecode 웹 사이트 바로 가기"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary"
                                            >
                                                wecode
                                            </a>
                                            에서 약 3개월 동안 프론트엔드 개발자
                                            과정을 학습했습니다.
                                        </span>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">Works</h6>
                                        <ul className="flex flex-col gap-4 text-sm">
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                <a
                                                    href="#"
                                                    title="프로젝트 커넥션"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary"
                                                >
                                                    Connection
                                                </a>
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Overview: 지역 중심의 위치
                                                    기반 쇼핑몰 서비스
                                                </span>
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Features: Portal로 모달 팝업
                                                    생성, ThemeProvider 기반의
                                                    테마 스위치, Redux로
                                                    장바구니 카운트 처리, 외부
                                                    결제 모듈(포트원)로
                                                    카카오페이 결제, 카카오 소셜
                                                    로그인, 다음 포스트코드로
                                                    주소 저장, 카카오 맵 API의
                                                    위도와 경도로 지도 표시,
                                                    라우터 이동 시 스크롤
                                                    초기화, 로티 로딩,
                                                    쿼리스트링으로 페이지네이션
                                                    및 필터 등
                                                </span>
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                <a
                                                    href="#"
                                                    title="프로젝트 호키"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary"
                                                >
                                                    HOKI
                                                </a>
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Overview: 인스트그램 클론
                                                    코딩
                                                </span>
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Features: 반응형 웹, 태마
                                                    스위치(Sass ver.), 소셜
                                                    로그인, 싱글 및 멀티 이미지
                                                    업로드, 이미지 스와이퍼 등
                                                </span>
                                            </li>
                                            <li className="hidden relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                project zero
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Overview: 포트폴리오 웹
                                                    사이트
                                                </span>
                                                <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Features: -
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">
                                            Tech Stacks
                                        </h6>
                                        <span className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[8px] before:left-1 before:bg-[#000] text-sm">
                                            React, Sass, Tailwind CSS,
                                            styled-components, JavaScript,
                                            Vite.js, Redux, Axios
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </li>
                        <li className="flex gap-4 py-8">
                            <h4 className="basis-60 text-xl font-bold">
                                Markup Developer
                            </h4>
                            <ol className="flex-1">
                                <li>
                                    <div>
                                        <h5 className="text-xl">
                                            콘텐츠웨이브(주)
                                        </h5>
                                        <span className="text-xs font-thin">
                                            2019.06 - 2023.07
                                        </span>
                                    </div>
                                    <div className="pt-8 pb-4">
                                        <h6 className="text-base">
                                            Description
                                        </h6>
                                        <span className="text-sm">
                                            국내 OTT 서비스인&nbsp;
                                            <a
                                                href="http://wavve.com/"
                                                title="Wavve 서비스 바로 가기"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary"
                                            >
                                                Wavve
                                            </a>
                                            의 웹 개발팀에서 PC web, Mobile web,
                                            TV 등 다양한 디바이스의 UI를
                                            구현했습니다.
                                        </span>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">Works</h6>
                                        <ul className="flex flex-col text-sm">
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                Wavve PC web 구축 및 운영
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                Wavve Mobile web 구축 및 운영
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                Wavve TV 디자인 시스템
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                Player UI 유지 보수
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                인권위 시정 권고에 따른 웹
                                                접근성 적용
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">
                                            Tech Stacks
                                        </h6>
                                        <span className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[8px] before:left-1 before:bg-[#000] text-sm">
                                            Vue.js, Sass, Tailwind CSS,
                                            styled-components, JavaScript,
                                            Storybook, Historie, GitLab, Jira &
                                            Confluence
                                        </span>
                                    </div>
                                </li>
                                <li className="py-8">
                                    <div>
                                        <h5 className="text-xl">(주)아메바</h5>
                                        <span className="text-xs font-thin">
                                            2017.06 - 2019.05
                                        </span>
                                    </div>
                                    <div className="pt-8 pb-4">
                                        <h6 className="text-base">
                                            Description
                                        </h6>
                                        <span className="text-sm">
                                            업계 20년 차인 웹 에이전시&nbsp;
                                            <a
                                                href="https://www.amoeba.co.kr/what"
                                                title="웹 에이전시 amȯėba 웹 사이트 바로 가기"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary"
                                            >
                                                amȯėba
                                            </a>
                                            에서 다양한 서비스 구축을
                                            담당했습니다. 구체적으로 서비스별
                                            디자인 시스템 및 컴포넌트
                                            라이브러리를 개발하는 역할을
                                            도맡았습니다. 참여했던 여러 프로젝트
                                            가운데 KT.com은&nbsp;
                                            <a
                                                href="http://www.i-award.or.kr/web/prize/2017/Awarded01.aspx"
                                                title="2017년 웹 어워드 코리아 수상작 바로 가기"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary"
                                            >
                                                2017년 웹 어워드 코리아
                                            </a>
                                            에서 생활브랜드부문 통합대상을
                                            수상했습니다.
                                        </span>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">Works</h6>
                                        <ul className="flex flex-col text-sm">
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                KT.com
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                현대카드 라이브러리
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                삼성 SDS Brightics IoT 2.0
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                삼성SDS 알파법 시스템
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                LG Thin Client
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                LG Design Identity
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                SK브로드밴드 oksusu
                                            </li>
                                            <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                중앙일보 블록체인 전문 미디어
                                                채널 joinD
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="py-4">
                                        <h6 className="text-base">
                                            Tech Stacks
                                        </h6>
                                        <span className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[8px] before:left-1 before:bg-[#000] text-sm">
                                            HTML, CSS, JQuery, Sass, Less,
                                            Github, Bootstrap, Foundation,
                                            Semantic UI, Jira
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </section>

                {/* Contact */}
                <section>
                    <div className="flex before:content-[''] before:block before:w-60 before:h-full">
                        <ul className="flex-1">
                            <li>
                                <a
                                    href="mailto:ryushin0167@gmail.com"
                                    title="류창선 이메일"
                                >
                                    <IconGmail />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/ryushin01"
                                    title="류창선 깃허브 바로 가기"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://velog.io/@ryushin0"
                                    title="류창선 벨로그 바로 가기"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconVelog />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/ryushin0"
                                    title="류창선 인스타그램 바로 가기"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconInstagram />
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center">
                            <em className="not-italic text-xl text-center">
                                류창선
                                <span className="block text-xs">
                                    Ryu Changsun
                                </span>
                            </em>
                            <span className="text-xs">Front-End Developer</span>
                            <img
                                src="/images/ryushin0.png"
                                alt="류창선 프로필 사진"
                                className="w-24 h-24 rounded-full overflow-hidden"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default Main;
