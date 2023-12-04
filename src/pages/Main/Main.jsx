import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { ReactComponent as IconGmail } from "../../assets/svg/contact/icon_gmail.svg";
import { ReactComponent as IconGithub } from "../../assets/svg/contact/icon_github.svg";
import { ReactComponent as IconVelog } from "../../assets/svg/contact/icon_velog.svg";
import { ReactComponent as IconInstagram } from "../../assets/svg/contact/icon_instagram.svg";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1200);
    }, []);

    return (
        <>
            {loading && <Loading />}
            <main className="w-full h-full before:content-[''] before:fixed before:top-0 before:left-0 before:h-full before:border-l-8 before:border-solid before:border-l-[#000] after:content-[''] after:fixed after:top-0 after:right-0 after:h-full after:border-r-8 after:border-solid after:border-r-[#000]">
                <div className="flex flex-col w-3/4 lg:w-2/3 m-auto py-6 before:content-[''] before:fixed before:top-0 before:left-0 before:w-full before:border-t-8 before:border-solid before:border-t-[#000] after:content-[''] after:fixed after:bottom-0 after:left-0 after:w-full after:border-b-8 after:border-solid after:border-b-[#000] before:z-10 after:z-10">
                    <section>
                        <hgroup className="flex flex-col justify-between">
                            <h1 className="py-6 text-3xl lg:text-5xl leading-snug lg:leading-normal font-black">
                                안녕하세요,
                                <br />
                                류창선입니다.
                            </h1>
                            <h2 className="py-4 text-xl lg:text-3xl leading-snug lg:leading-normal font-thin">
                                서울에서 마크업 개발자로 6년간 일했으며, 웹
                                개발자에게 있어서 가장 중요한 것은&nbsp;
                                <span className="text-primary">웹 표준</span>을
                                지키는 것이라 생각합니다. 현재는 프론트엔드
                                개발자로 나아가기 위해 노력하고 있습니다.
                            </h2>
                        </hgroup>
                    </section>

                    <section>
                        <ol>
                            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
                                <h3 className="basis-0 lg:basis-60 text-xl font-bold">
                                    Front-End Developer
                                </h3>
                                <ol className="flex-1">
                                    <li>
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                위코드
                                            </h4>
                                            <span className="text-xs font-thin text-[#717171] opacity-60">
                                                2023.08 - 2023.11
                                            </span>
                                        </div>
                                        <div className="pt-8 pb-4">
                                            <h5 className="text-lg font-semibold">
                                                Description
                                            </h5>
                                            <span className="text-sm">
                                                부트캠프&nbsp;
                                                <a
                                                    href="https://wecode.co.kr/"
                                                    title="오프라인 부트캠프 wecode 웹 사이트 바로 가기"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-secondary hover:text-primary focus:text-primary"
                                                >
                                                    wecode
                                                </a>
                                                에서 약 3개월 동안 프론트엔드
                                                개발자 과정을 학습했습니다.
                                            </span>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-lg font-semibold">
                                                Works
                                            </h5>
                                            <ul className="flex flex-col gap-4 text-sm">
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    <a
                                                        href="https://ryushin01.github.io/connection/"
                                                        title="커넥션 바로 가기"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-secondary hover:text-primary focus:text-primary"
                                                    >
                                                        Connection
                                                    </a>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Overview: 위치 기반
                                                        쇼핑몰 서비스 /
                                                        프론트엔드 개발자 2인
                                                        참여 / 3주 소요
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Features: Portal로 모달
                                                        팝업 생성, ThemeProvider
                                                        기반의 테마 스위치,
                                                        Redux로 장바구니 카운트
                                                        처리, 외부 결제
                                                        모듈(포트원)로
                                                        카카오페이 결제, 카카오
                                                        소셜 로그인, 다음
                                                        포스트코드로 주소 저장,
                                                        카카오 맵 API의 위도와
                                                        경도로 지도 표시, 라우터
                                                        이동 시 스크롤 초기화,
                                                        Lottie 로딩,
                                                        쿼리스트링으로
                                                        페이지네이션 및 필터
                                                        제어 등
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Tech Stacks: React,
                                                        styled-components,
                                                        JavaScript, Redux, CRA,
                                                        JSDoc
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        <a
                                                            href="https://velog.io/@ryushin0/3%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
                                                            title="3차 회고록 바로 가기"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-secondary hover:text-primary focus:text-primary after:content-[''] after:inline-block after:w-3 after:h-3 after:bg-[url('/images/icon_link.png')] after:bg-cover hover:after:bg-[url('/images/icon_link_active.png')] focus:after:bg-[url('/images/icon_link_active.png')]"
                                                        >
                                                            회고록 링크
                                                        </a>
                                                    </span>
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    <a
                                                        href="https://ryushin01.github.io/sprout/"
                                                        title="프로젝트 스프라우트 바로 가기"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-secondary hover:text-primary focus:text-primary"
                                                    >
                                                        sprout
                                                    </a>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Overview: 소셜 네트워크
                                                        서비스 / 프론트엔드
                                                        개발자 1인 참여 / 2주
                                                        소요
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Features: 반응형 웹,
                                                        테마 스위치(Sass ver.),
                                                        카카오 소셜 로그인, 싱글
                                                        및 멀티 이미지 업로드,
                                                        이미지 스와이퍼, Axios
                                                        모듈화 등
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Tech Stacks: React,
                                                        Sass, JavaScript, Axios,
                                                        Vite
                                                    </span>
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    <a
                                                        href="javascript:void(0)"
                                                        title="untitled 바로 가기"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-secondary hover:text-primary focus:text-primary"
                                                    >
                                                        azure
                                                    </a>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Overview: 모바일 웹 포탈
                                                        사이트 / 프론트엔드
                                                        개발자 1인 참여 / n주
                                                        소요
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Features: 스와이퍼
                                                        레이아웃 등
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Tech Stacks: React,
                                                        styled-components,
                                                        JavaScript, Axios, Vite,
                                                        Storybook
                                                    </span>
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    project zero
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Overview: 포트폴리오 웹
                                                        사이트
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Features: N/A
                                                    </span>
                                                    <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                        Tech Stacks: React,
                                                        Tailwind CSS, Vite
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-lg font-semibold">
                                                Tech Stacks
                                            </h5>
                                            <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000] text-sm">
                                                React, Sass, Tailwind CSS,
                                                styled-components, JavaScript,
                                                Redux, Axios, CRA, Vite,
                                                Storybook, JSDoc
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                            <li className="flex gap-8 lg:gap-4 pt-12 flex-col lg:flex-row relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#eee] before:rotate-45 before:absolute before:top-[-4px] before:left-1/2 before:translate-x-[-50%] after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#eee] after:absolute after:top-0 after:left-1/2 after:translate-x-[-50%]">
                                <h3 className="basis-0 lg:basis-60 text-xl font-bold">
                                    Markup Developer
                                </h3>
                                <ol className="flex-1">
                                    <li className="pb-8">
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                콘텐츠웨이브(주)
                                            </h4>
                                            <span className="text-xs font-thin text-[#717171] opacity-60">
                                                2019.06 - 2023.07
                                            </span>
                                        </div>
                                        <div className="pt-8 pb-4">
                                            <h5 className="text-lg font-semibold">
                                                Description
                                            </h5>
                                            <span className="text-sm">
                                                국내 OTT 서비스인&nbsp;
                                                <a
                                                    href="http://wavve.com/"
                                                    title="Wavve 서비스 바로 가기"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-secondary hover:text-primary focus:text-primary"
                                                >
                                                    Wavve
                                                </a>
                                                의 웹 개발팀에서 PC web, Mobile
                                                web, TV 등 다양한 디바이스의
                                                UI를 구현했습니다.
                                            </span>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-lg font-semibold">
                                                Works
                                            </h5>
                                            <ul className="flex flex-col text-sm">
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Wavve PC web 구축 및 운영
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    Wavve Mobile web 구축 및
                                                    운영
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
                                            <h5 className="text-lg font-semibold">
                                                Tech Stacks
                                            </h5>
                                            <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000] text-sm">
                                                Vue.js, Sass, Tailwind CSS,
                                                UnoCSS, styled-components,
                                                JavaScript, WAI-ARIA, Storybook,
                                                Historie, GitLab, Jira &
                                                Confluence
                                            </span>
                                        </div>
                                    </li>
                                    <li className="relative py-12 border-t border-solid border-[#eee] before:content-[''] before:block before:w-2 before:h-2 before:bg-[#eee] before:rotate-45 before:absolute before:top-[-4px] before:left-1/2 before:translate-x-[-50%]">
                                        <div>
                                            <h4 className="text-xl font-semibold">
                                                (주)아메바
                                            </h4>
                                            <span className="text-xs font-thin text-[#717171] opacity-60">
                                                2017.06 - 2019.05
                                            </span>
                                        </div>
                                        <div className="pt-8 pb-4">
                                            <h5 className="text-lg font-semibold">
                                                Description
                                            </h5>
                                            <span className="text-sm">
                                                업계 20년 차인 웹 에이전시&nbsp;
                                                <a
                                                    href="https://www.amoeba.co.kr/what"
                                                    title="웹 에이전시 amȯėba 웹 사이트 바로 가기"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-secondary hover:text-primary focus:text-primary"
                                                >
                                                    amoeba
                                                </a>
                                                에서 다양한 서비스 구축을
                                                담당했습니다. 구체적으로
                                                서비스별 디자인 시스템 및
                                                컴포넌트 라이브러리를 개발하는
                                                역할을 도맡았습니다. 참여했던
                                                여러 프로젝트 가운데
                                                KT.com은&nbsp;
                                                <a
                                                    href="http://www.i-award.or.kr/web/prize/2017/Awarded01.aspx"
                                                    title="2017년 웹 어워드 코리아 수상작 바로 가기"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-secondary hover:text-primary focus:text-primary"
                                                >
                                                    2017년 웹 어워드 코리아
                                                </a>
                                                에서 생활브랜드부문 통합대상을
                                                수상했습니다.
                                            </span>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-lg font-semibold">
                                                Works
                                            </h5>
                                            <ul className="flex flex-col text-sm">
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    KT.com
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    현대카드 라이브러리
                                                </li>
                                                <li className="relative pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000]">
                                                    삼성SDS Brightics IoT 2.0
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
                                            </ul>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-lg font-semibold">
                                                Tech Stacks
                                            </h5>
                                            <span className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-px before:absolute before:top-[10px] before:left-1 before:bg-[#000] text-sm">
                                                HTML Living Standard, CSS, Sass,
                                                Less, JQuery, Github, Bootstrap,
                                                Foundation, Semantic UI, Jira
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </section>

                    <section>
                        <div className="flex justify-between items-center py-6 before:content-[''] before:block before:w-0 before:h-full lg:before:w60">
                            <div className="flex items-end lg:items-center gap-4 flex-col lg:flex-row">
                                <div className="flex flex-col items-end gap-4 order-1 lg:order-none">
                                    <h6 className="text-base text-right">
                                        류창선(ryushin0)
                                        <em className="block text-xs font-thin text-[#717171] opacity-60 not-italic tracking-wide">
                                            Front-End Developer
                                        </em>
                                    </h6>
                                    <ul className="flex gap-2">
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
                                </div>
                                <div className="relative w-16 h-16 lg:w-24 lg:h-24 after:content-[''] after:absolute after:top-0 after:right-0 lg:after:top-[2px] lg:after:right-[2px] after:w-4 after:h-4 lg:after:w-5 lg:after:h-5 after:bg-[url('/images/icon_crown.png')] after:bg-cover after:bg-no-repeat after:bg-center after:z-[1]">
                                    <img
                                        src="/images/ryushin0.png"
                                        alt="류창선 프로필 사진"
                                        className="w-full h-full object-contain border-solid border border-[#f7f7f7] overflow-hidden rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Main;
