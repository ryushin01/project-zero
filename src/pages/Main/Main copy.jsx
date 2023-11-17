import { ReactComponent as IconReact } from "../../assets/images/career/icon_react.svg";

const Main = () => {
    return (
        <main className="flex">
            {/* About Me */}
            <section>
                <hgroup>
                    <h1>
                        안녕하세요,
                        <br />
                        저는 류창선입니다.
                    </h1>
                    <h2>
                        서울에서 마크업 개발자로 6년간 일했으며, 현재는
                        프론트엔드 개발자로 전향하기 위해 노력하고 있습니다.
                    </h2>
                </hgroup>
            </section>

            {/* Career */}
            <section>
                <div>
                    <h3>2023</h3>
                    <ol>
                        <li>
                            <h4>Front-End Developer</h4>
                            <ol>
                                <li>
                                    <div>
                                        <h5>&gt;wecode (Bootcamp)</h5>
                                        <span>2023.08 - 2023.11</span>
                                    </div>
                                    <div>
                                        <h6>Description</h6>
                                        <span>-</span>
                                    </div>
                                    <div>
                                        <h6>Work</h6>
                                        <ul className="flex flex-col">
                                            <li>work 1</li>
                                            <li>work 2</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6>Tech Stack</h6>
                                        <ul className="flex flex-row">
                                            <li>
                                                <IconReact />
                                                React
                                            </li>
                                            <li>
                                                <IconReact />
                                                React
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </li>
                        <li>
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
                                            국내 OTT 서비스인{" "}
                                            <a
                                                href="http://wavve.com/"
                                                title="Wavve 서비스 바로 가기"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Wavve
                                            </a>
                                            의 웹 개발팀에서 PC web, Mobile web,
                                            TV 등 다양한 디바이스의 UI를
                                            구현했습니다.
                                        </span>
                                    </div>
                                    <div>
                                        <h6>Work</h6>
                                        <ul className="flex flex-col">
                                            <li>Wavve PC web 구축 및 운영</li>
                                            <li>
                                                Wavve Mobile web 구축 및 운영
                                            </li>
                                            <li>Wavve TV 디자인 시스템</li>
                                            <li>Player UI 유지 보수</li>
                                            <li>웹 접근성 적용</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6>Tech Stack</h6>
                                        <ul className="flex flex-row">
                                            <li>Vue.js</li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </section>
        </main>
    );
};

export default Main;
