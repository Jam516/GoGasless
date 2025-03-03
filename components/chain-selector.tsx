"use client"

import { useRouter, usePathname } from "next/navigation"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Link2Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const CHAINS = [
    { id: "all", name: "All Chains" },
    { id: "base", name: "Base" },
    { id: "polygon", name: "Polygon" },
    { id: "arbitrum", name: "Arbitrum" },
    { id: "linea", name: "Linea" },
    { id: "optimism", name: "Optimism" },
    { id: "arbitrum_nova", name: "Arbitrum Nova" },
    { id: "celo", name: "Celo" },
    { id: "avalanche", name: "Avalanche" },
    { id: "bsc", name: "BSC" },
    { id: "ethereum", name: "Ethereum" },
]

export function ChainSelector() {
    const router = useRouter()
    const pathname = usePathname()

    // Extract current chain from pathname
    const currentChain = pathname.split("/").pop() || "all"

    // Get the display name for the current chain
    const currentChainName = CHAINS.find(chain => chain.id === currentChain)?.name || "All Chains"

    const handleChainSelect = (chainId: string) => {
        router.push(`/leaderboard/${chainId}`)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-black h-8"
                >
                    <Link2Icon className="mr-2 h-4 w-4" />
                    {currentChainName}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuLabel>Select chain</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {CHAINS.map((chain) => (
                    <DropdownMenuItem
                        key={chain.id}
                        onClick={() => handleChainSelect(chain.id)}
                        className={chain.id === currentChain ? "bg-gray-100 font-medium" : ""}
                    >
                        {chain.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}