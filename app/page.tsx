import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { MobileBlocker } from "@/components/mobile-blocker";
import { getHomeData } from "@/app/actions/getHomeData";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       name: "SuperChamp",
//       gas_savings: 100,
//       new_accounts: 1000,
//       active_accounts: 1000,
//       gasless_txns: 1000,
//     },
//     {
//       name: "Anichess",
//       gas_savings: 100,
//       new_accounts: 1000,
//       active_accounts: 1000,
//       gasless_txns: 1000,
//     },
//     {
//       name: "Obello",
//       gas_savings: 100,
//       new_accounts: 1000,
//       active_accounts: 1000,
//       gasless_txns: 1000,
//     },
//   ]
// }

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
  // const data = await getData()
  const timeframe = 'month'
  const data = await getHomeData({ timeframe });

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center space-y-2 pt-6">
        {/* <AboutBlock />
        <Separator /> */}
        {/* <MobileBlocker /> */}
        <div className="flex flex-col justify-between h-[calc(100vh-48px)] md:h-[calc(100vh-84px)]">
          <div className="grid h-2/3 gap-4 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-left gap-6 justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl font-bold leading-none tracking-tight">Grow your app with gasless transactions</h1>
                <p className="font-semibold text-muted-foreground">Gas fees are the biggest barrier to onboarding new crypto users. Use paymasters to pay gas on users behalf.</p>
              </div>
              <div className="grid gap-4 grid-cols-2">
                <div className="flex flex-col">
                  <p className="font-semibold text-muted-foreground">GAS SAVINGS</p>
                  <p className="font-bold text-3xl">$100B</p>
                  <p className="text-sm">25M accounts</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-muted-foreground">GASLESS TXNS</p>
                  <p className="font-bold text-3xl">122.6M</p>
                  <p className="text-sm">56 apps</p>
                </div>
              </div>
            </div>
          </div>
          <svg className="self-center mb-8" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z" fill="currentColor" ></path></svg>
        </div>
        <div className="flex items-center">
          <DataTable columns={columns} data={data.leaderboard} />
        </div>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}
      </main>
      <footer >
      </footer>
    </div>
  );
}
