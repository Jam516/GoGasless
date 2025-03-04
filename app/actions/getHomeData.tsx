interface LeaderboardEntry {
    PROJECT: string
    LOGO: string
    PAYMASTER_VOLUME_7D: number
    ACTIVE_ACCOUNTS_7D: number
    GASLESS_TXNS_7D: number
    RN_7D: number
    PAYMASTER_VOLUME_30D: number
    ACTIVE_ACCOUNTS_30D: number
    GASLESS_TXNS_30D: number
    RN_30D: number
    PAYMASTER_VOLUME_90D: number
    ACTIVE_ACCOUNTS_90D: number
    GASLESS_TXNS_90D: number
    RN_90D: number
    WEBSITE: string | null
    CATEGORY: string
}

// interface PaymasterStats {
//     GASLESS_TXNS: number;
//     PAYMASTER_VOLUME: number;
// }

interface HomeData {
    leaderboard: LeaderboardEntry[];
    // total_paymaster_stats: PaymasterStats[];
}

interface HomeDataParams {
    chain: string;
}


export async function getHomeData({ chain }: HomeDataParams): Promise<HomeData> {

    const response = await fetch(`https://gogasless-api.onrender.com/home?chain=${chain}`);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const homeData: HomeData = await response.json();

    return homeData;
}