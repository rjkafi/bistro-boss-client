

const Cover = ({menuImg,title,subTitle}) => {
    return (
        <div>
            <div
                className="hero h-[700px]"
                style={{
                    backgroundImage:` url("${menuImg}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                           {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;