interface HomeData {
    leaderboard: any[];
    total_paymaster_stats: any[];
}

interface HomeDataParams {
    timeframe: string;
}


export async function getHomeData({ timeframe }: HomeDataParams): Promise<HomeData> {

    const response = await fetch(`https://gogasless-api.onrender.com/home?timeframe=${timeframe}`);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const homeData: HomeData = await response.json();

    return homeData;
}