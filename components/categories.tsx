import {
    StackIcon,
    ShadowOuterIcon,
    ComponentInstanceIcon,
    MixIcon,
    AvatarIcon,
    FileTextIcon,
    ImageIcon
} from "@radix-ui/react-icons"

export const categories = [
    {
        value: "game",
        label: "Game",
        icon: MixIcon,
    },
    {
        value: "social",
        label: "Social",
        icon: AvatarIcon,
    },
    {
        value: "erc20",
        label: "Token",
        icon: ComponentInstanceIcon,
    },
    {
        value: "messaging",
        label: "Messaging",
        icon: StackIcon,
    },
    {
        value: "prediction market",
        label: "Prediction Market",
        icon: FileTextIcon,
    },
    {
        value: "dex aggregator",
        label: "DEX Aggregator",
        icon: FileTextIcon,
    },
    {
        value: "nft",
        label: "NFT",
        icon: ImageIcon,
    },
    {
        value: "other",
        label: "Other",
        icon: ShadowOuterIcon,
    },
]