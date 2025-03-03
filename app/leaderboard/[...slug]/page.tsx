import { Separator } from "@/components/ui/separator";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { MobileBlocker } from "@/components/mobile-blocker";
import { getHomeData } from "@/app/actions/getHomeData";

function AboutBlock() {
  return (
    <div className="grid gap-6 text-sm grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-left">
        <h2 className="font-bold ">What is an ERC-4337 smart wallet?</h2>
        <p>A smart contract wallet AKA smart wallet is a customizable Ethereum account. Smart wallets can be programmed with features like</p>
        <li>Batched transactions: Multiple actions, such as approving and swapping on a DEX, can be combined into one transaction.</li>
        <li>Gas fee abstraction: Users can transact without having to pay gas fees in the native token.</li>
        <li>Seedphrase-free security: Users can secure their wallets with verification methods that are easier and safer than seedphrases e.g. passkeys.</li>

      </div>
      <div className="flex flex-col items-left">
        <h2 className="font-bold ">What is a gasless transaction?</h2>
        <p>When a smart wallet user makes a &quot;gasless&quot; transaction on an app the user does not need to pay gas fees with ETH. The app developer uses a
          {" "}
          <a
            href="https://www.coinbase.com/en-gb/developer-platform/products/paymaster"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Paymaster
          </a>
          {" "}
          to either pay the user&apos;s fee for them or allow them to pay their fees with any ERC-20 token they have.</p>
        <h2 className="font-bold mt-3">How do I build a gasless app?</h2>
        <p>Check out the Coinbase Smart Wallet
          {" "}
          <a
            href="https://www.smartwallet.dev/why"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            docs
          </a>
          {" "}
          to learn how to add smart wallet functionality to your app and enable gasless transactions with a paymaster.</p>
      </div>
    </div>
  )
}

export default async function Home({ params }: { params: { slug: string[] } }) {
  const chain = params.slug[0];
  const data = await getHomeData({ chain });

  return (
    <div className="flex flex-col mt-10 mb-10 font-[family-name:var(--font-inter-sans)]">
      <main className="flex flex-col items-center space-y-12">
        <MobileBlocker />
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
