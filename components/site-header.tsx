import {

    MarginIcon
} from "@radix-ui/react-icons"

export function SiteHeader() {
    return (
        <div>
            <div className="flex h-12 font-[family-name:var(--font-berkeley-mono)] font-bold items-center justify-between md:py-9">
                <div className="flex flex-row items-center gap-2 border border-black px-2 py-1 ">
                    <MarginIcon />
                    <h1>GoGasless</h1>
                    {/* <MagicWandIcon /> */}
                </div>
            </div>
        </div>
    );
}