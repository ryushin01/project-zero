import { ReactComponent as IconReact } from "../../assets/svg/career/icon_react.svg";
import { ReactComponent as IconTailwindcss } from "../../assets/svg/career/icon_tailwindcss.svg";
import { ReactComponent as IconVite } from "../../assets/svg/career/icon_vite.svg";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-10 flex flex-col justify-center items-center gap-12 bg-[#000] text-[#fff]">
            <img
                src="/images/logo_white.png"
                alt="project zero logo"
                className="w-1/2 md:w-1/3"
            />

            <div className="flex flex-col items-center gap-4">
                <span className="text-lg">
                    <em className="not-italic">project zero</em>
                    &nbsp;made with&nbsp;
                </span>
                <ul className="flex gap-4">
                    <li>
                        <IconReact />
                    </li>
                    <li>
                        <IconVite />
                    </li>
                    <li>
                        <IconTailwindcss />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Loading;
