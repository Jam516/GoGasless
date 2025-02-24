import {
    ShadowOuterIcon,
    ComponentInstanceIcon,
    MixIcon,
    AvatarIcon,
    FileTextIcon,
    ImageIcon,
    EnvelopeClosedIcon,
    BarChartIcon,
    PaperPlaneIcon,
    WidthIcon,
    EnterIcon,
    DoubleArrowRightIcon,
    StackIcon,
    ValueNoneIcon,
    ArrowRightIcon
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
        icon: EnvelopeClosedIcon,
    },
    {
        value: "prediction market",
        label: "Prediction Market",
        icon: FileTextIcon,
    },
    {
        value: "dex aggregator",
        label: "DEX Aggregator",
        icon: BarChartIcon,
    },
    {
        value: "dex",
        label: "DEX",
        icon: BarChartIcon,
    },
    {
        value: "derivatives",
        label: "DEX",
        icon: DoubleArrowRightIcon,
    },
    {
        value: "plugin",
        label: "Plugin",
        icon: StackIcon,
    },
    {
        value: "options",
        label: "Options",
        icon: ValueNoneIcon,
    },
    {
        value: "bridge",
        label: "Bridge",
        icon: WidthIcon,
    },
    {
        value: "telegram wallet",
        label: "Telegram Wallet",
        icon: PaperPlaneIcon,
    },
    {
        value: "payments",
        label: "Payments",
        icon: ArrowRightIcon,
    },
    {
        value: "token claim",
        label: "Token Claim",
        icon: EnterIcon,
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