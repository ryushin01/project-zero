const Header = () => {
    return (
        <header className="fixed top-[-50px] left-[-50px] border-solid border-t-[50px] border-t-[transparent] border-r-[50px] border-r-[#000] border-l-[50px] border-l-[transparent] border-b-[50px] border-b-[transparent] rotate-45">
            <h1 className="absolute top-[-20px] left-[15px] w-10 h-10 rotate-[-45deg]">
                <img
                    src="/images/logo_white.png"
                    alt="project zero logo"
                    className="w-10"
                />
            </h1>
        </header>
    );
};

export default Header;
