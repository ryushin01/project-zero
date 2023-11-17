const Main = () => {
    return (
        <main className="flex flex-col">
            {/* About Me */}
            <section>
                <hgroup>
                    <h1 className="text-6xl">
                        안녕하세요,
                        <br />
                        저는 류창선입니다<span className="text-primary">.</span>
                    </h1>
                    <h2 className="text-5xl leading-normal">
                        서울에서 마크업 개발자로 6년간 일했으며, 현재는
                        프론트엔드 개발자로 전향하기 위해 노력하고 있습니다.
                    </h2>
                </hgroup>
                <div>
                    <span className="text-4xl leading-normal">
                        저는 Arsenal F.C.와 Detroit Tigers을 응원하고 있으며,
                        보드 게임과 소설책 읽기, 라디오 청취를 좋아합니다.
                    </span>
                </div>
            </section>

            {/* Career */}
            <section>
                <ol>
                    <li>
                        <h3>2023~</h3>
                        <h4>Front-End Developer</h4>
                        <ol>
                            <li>
                                <div>
                                    <h5>&gt;wecode (Bootcamp)</h5>
                                    <span>2023.08 - 2023.11</span>
                                </div>
                                <div>
                                    <h6>Description</h6>
                                    <span>
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
                                <div>
                                    <h6>Work</h6>
                                    <ul className="flex flex-col">
                                        <li>Connection</li>
                                        <li>
                                            Project HOKI (Instagram Cloning)
                                        </li>
                                        <li>Portfolio Web Site</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Tech Stack</h6>
                                    <span>
                                        React, Sass, Tailwind CSS,
                                        styled-components, Javascript, Vite.js,
                                        Redux
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>~2023</h3>
                        <h4>Markup Developer | Web Publisher</h4>
                        <ol>
                            <li>
                                <div>
                                    <h5>콘텐츠웨이브(주)</h5>
                                    <span>2019.06 - 2023.07</span>
                                </div>
                                <div>
                                    <h6>Description</h6>
                                    <span>
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
                                        의 웹 개발팀에서 PC web, Mobile web, TV
                                        등 다양한 디바이스의 UI를 구현했습니다.
                                    </span>
                                </div>
                                <div>
                                    <h6>Work</h6>
                                    <ul className="flex flex-col">
                                        <li>Wavve PC web 구축 및 운영</li>
                                        <li>Wavve Mobile web 구축 및 운영</li>
                                        <li>Wavve TV 디자인 시스템</li>
                                        <li>Player UI 유지 보수</li>
                                        <li>웹 접근성 적용</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Tech Stack</h6>
                                    <span>
                                        Vue.js, Sass, Tailwind CSS,
                                        styled-components, Javascript,
                                        Storybook, Historie, GitLab
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h5>(주)아메바</h5>
                                    <span>2017.06 - 2019.05</span>
                                </div>
                                <div>
                                    <h6>Description</h6>
                                    <span>
                                        업계 20년차인 웹 에이전시&nbsp;
                                        <a
                                            href="https://www.amoeba.co.kr/what"
                                            title="웹 에이전시 amȯėba 웹 사이트 바로 가기"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary"
                                        >
                                            amȯėba
                                        </a>
                                        에서 다양한 서비스 구축을 담당했습니다.
                                        그 중 KT.com은&nbsp;
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
                                <div>
                                    <h6>Work</h6>
                                    <ul className="flex flex-col">
                                        <li>KT.com</li>
                                        <li>현대카드 라이브러리</li>
                                        <li>삼성 SDS Brightics IoT 2.0</li>
                                        <li>삼성SDS 알파법 시스템</li>
                                        <li>LG Thin Client</li>
                                        <li>LG Design Identity</li>
                                        <li>SK브로드밴드 oksusu</li>
                                        <li>
                                            중앙일보 블록체인 전문 미디어 채널
                                            joinD
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Tech Stack</h6>
                                    <span>
                                        HTML, CSS, JQuery, Sass, Less, Github
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ol>
            </section>

            {/* Contact */}
            <section>contact</section>
        </main>
    );
};

export default Main;
