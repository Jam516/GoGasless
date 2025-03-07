// import { MobileBlocker } from "@/components/mobile-blocker";
import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {

    return (
        <div className="flex flex-col mt-10 mb-10 font-[family-name:var(--font-inter-sans)]">
            <main className="flex flex-col items-center space-y-12">
                {/* <MobileBlocker /> */}
                <div className="flex flex-col gap-4 items-center md:w-1/2">
                    <h1 className="text-xl md:text-4xl font-bold leading-none tracking-tight text-center">Discover Gasless Apps</h1>
                    <p className="text-sm md:text-base font-semibold text-muted-foreground text-center">Gas fees are the biggest barrier to onboarding new crypto users. Use {" "}
                        <a
                            href="https://www.coinbase.com/en-gb/developer-platform/products/paymaster"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            paymasters
                        </a> to give your users a gasless experience.
                    </p>
                </div>
                <div className="flex items-center">
                    <Skeleton className="h-[700px] w-[1000px]" />
                </div>
            </main>
            <footer >
            </footer>
        </div>
    );
}
