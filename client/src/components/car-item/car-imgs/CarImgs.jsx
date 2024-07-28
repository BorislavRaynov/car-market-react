export default function CarImgs(
    urls,
) {
    return (
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                    alt="main-pic"
                    src={urls[0]}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                        alt="second-pic"
                        src={urls[1]}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                        alt="third-pic"
                        src={urls[2]}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                    alt="forth-pic"
                    src={urls[3]}
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>

    );
}