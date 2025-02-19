import { Separator } from "@/components/ui/separator";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { MobileBlocker } from "@/components/mobile-blocker";
import { getHomeData } from "@/app/actions/getHomeData";

function AboutBlock() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-left">
        <h2 className="font-bold text-sm ">What is a smart wallet?</h2>
        <p >Smart wallet apps can transact witout paying gas fees if the app they are using sponsor them via a paymaster</p>
        <h2 className="font-bold text-sm mt-3">What is a gasless transaction?</h2>
        <p >Smart wallet apps can transact witout paying gas fees if the app they are using sponsor them via a paymaster</p>
      </div>
      <div className="flex flex-col items-left">
        <h2 className="font-bold text-sm">How do I go gasless?</h2>
        <p>Keymetrics.world analyzes onchain data to surface the latest patterns and trends in WorldApp usage.</p>
      </div>
    </div>
  )
}

export default async function Home() {
  const timeframe = 'month'
  const data = await getHomeData({ timeframe });

  return (
    <div className="flex flex-col mt-10 mb-10 font-[family-name:var(--font-inter-sans)]">
      <main className="flex flex-col items-center space-y-12">
        <MobileBlocker />
        <div className="flex flex-col gap-4 items-center w-1/2">
          <h1 className="text-4xl font-bold leading-none tracking-tight">Discover Gasless Apps</h1>
          <p className="font-semibold text-muted-foreground text-center">Gas fees are the biggest barrier to onboarding new crypto users. Use paymasters to give your users a gasless experience.</p>
        </div>
        <div className="flex items-center">
          <DataTable columns={columns} data={data.leaderboard} page_length={25} />
        </div>
        <Separator />
        <AboutBlock />
      </main>
      <footer >
      </footer>
    </div>
  );
}
