export function SiteFooter() {
    return (
        <footer className="mt-3">
            <div className="flex flex-row justify-between ">
                <div className="flex flex-row">

                    <p className="text-center text-base text-muted-foreground">
                        powered by Base
                    </p>
                    {" "}
                    {/* <a
                        href="https://www.allium.so/"
                        target="_blank"
                    >
                        <img src="/allium-logo.png" alt="Allium Logo" className="h-[20px]" />
                    </a> */}
                </div>
                <div className="flex flex-col">
                    <p className="mb-4 text-center text-base text-muted-foreground">
                        built by{" "}
                        <a
                            href="https://twitter.com/0xKofi"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            0xKofi
                        </a>
                    </p>

                </div>
            </div>
        </footer>
    );
}