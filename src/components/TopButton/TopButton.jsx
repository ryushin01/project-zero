const TopButton = () => {
    const goToTop = () => {
        window.scroll({
            top: 0,
        });
    };

    return (
        <button
            type="button"
            className="fixed bottom-[-50px] right-[-50px] border-solid border-t-[50px] border-t-[transparent] border-r-[50px] border-r-[transparent] border-l-[50px] border-l-[#000] border-b-[50px] border-b-[transparent] rotate-45"
            onClick={goToTop}
        >
            <span className="absolute bottom-0 right-[-25px] w-20 rotate-[-45deg]">
                <img
                    src="/images/icon_top_button.png"
                    alt="화면 최상단 이동 버튼"
                    className="w-8"
                />
            </span>
        </button>
    );
};

export default TopButton;
