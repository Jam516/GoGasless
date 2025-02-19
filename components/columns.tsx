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
    PAYMASTER_VOLUME: number
    ACTIVE_ACCOUNTS: number
    GASLESS_TXNS: number
    RN: number
    WEBSITE: string | null
    CATEGORY: string
}

export const columns: ColumnDef<App>[] = [
    {
        accessorKey: "RN",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title=" " />
        ),
        enableSorting: false,
        enableHiding: false,
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
                    className="aspect-square rounded-md object-cover"
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
            <DataTableColumnHeader column={column} title="PROJECT" />
        ),
        cell: ({ row }) => {
            const project = row.getValue("PROJECT") as string;
            const website = row.original.WEBSITE;

            return (
                <div>
                    {website ? (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600"
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
        accessorKey: "PAYMASTER_VOLUME",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="GAS ABSTRACTED" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("PAYMASTER_VOLUME"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div>
                    ${displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "ACTIVE_ACCOUNTS",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ACTIVE ACOUNTS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ACTIVE_ACCOUNTS"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div>
                    {displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "GASLESS_TXNS",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="GASLESS TXNS" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GASLESS_TXNS"));
            const displayValue = Math.round(amount).toLocaleString();
            return (
                <div>
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
