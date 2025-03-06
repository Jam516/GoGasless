"use client"

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTableColumnHeader } from "@/components/column-header";
import { categories } from "@/components/categories";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type App = {
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

export const columns: ColumnDef<App>[] = [
    {
        accessorKey: "RN_7D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        cell: ({ row }) => {
            const displayValue = row.getValue("RN_7D");
            return (
                displayValue
            )
        },
    },
    {
        accessorKey: "RN_30D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        cell: ({ row }) => {
            const displayValue = row.getValue("RN_30D");
            return (
                displayValue
            )
        },
    },
    {
        accessorKey: "RN_90D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        cell: ({ row }) => {
            const displayValue = row.getValue("RN_90D");
            return (
                displayValue
            )
        },
    },
    {
        accessorKey: "LOGO",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        cell: ({ row }) => {
            return (
                <Image
                    alt="Logo"
                    className="aspect-square rounded-md object-cover min-w-[32px] min-h-[32px]"
                    height="64"
                    src={row.getValue("LOGO")}
                    width="64"
                />
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "PROJECT",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        cell: ({ row }) => {
            const project = row.getValue("PROJECT") as string;
            const website = row.original.WEBSITE;

            return (
                <div className="font-bold  ">
                    {website ? (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:underline text-blue-600"
                        >
                            {project}
                        </a>
                    ) : (
                        project
                    )}
                </div>
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "ACTIVE_ACCOUNTS_7D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="7D ACTIVE SMART WALLETS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ACTIVE_ACCOUNTS_7D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "PAYMASTER_VOLUME_7D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="7D GAS ABSTRACTED" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("PAYMASTER_VOLUME_7D"));
            // const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {amount < 1 ? <>&lt;$1</> : `$${Math.round(amount).toLocaleString()}`}
                </div>
            )
        },
    },
    {
        accessorKey: "GASLESS_TXNS_7D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="7D GASLESS TXNS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GASLESS_TXNS_7D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "ACTIVE_ACCOUNTS_30D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="30D ACTIVE SMART WALLETS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ACTIVE_ACCOUNTS_30D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "PAYMASTER_VOLUME_30D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="30D GAS ABSTRACTED" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("PAYMASTER_VOLUME_30D"));
            // const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {amount < 1 ? <>&lt;$1</> : `$${Math.round(amount).toLocaleString()}`}
                </div>
            )
        },
    },
    {
        accessorKey: "GASLESS_TXNS_30D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="30D GASLESS TXNS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GASLESS_TXNS_30D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "ACTIVE_ACCOUNTS_90D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="90D ACTIVE SMART WALLETS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ACTIVE_ACCOUNTS_90D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "PAYMASTER_VOLUME_90D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="90D GAS ABSTRACTED" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("PAYMASTER_VOLUME_90D"));
            // const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {amount < 1 ? <>&lt;$1</> : `$${Math.round(amount).toLocaleString()}`}
                </div>
            )
        },
    },
    {
        accessorKey: "GASLESS_TXNS_90D",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="90D GASLESS TXNS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GASLESS_TXNS_90D"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div className=" ">
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "CATEGORY",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="CATEGORY" />
        ),
        cell: ({ row }) => {
            const status = categories.find(
                (status) => status.value === row.getValue("CATEGORY")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
]
