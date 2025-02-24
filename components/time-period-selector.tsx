"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ClockIcon } from "@radix-ui/react-icons"
import { Table, SortingState } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableTimePeriodProps<TData> {
    table: Table<TData>
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>
}

const TIME_PERIOD_COLUMNS = {
    "7d": ["RN_7D", "LOGO", "PROJECT", "ACTIVE_ACCOUNTS_7D", "PAYMASTER_VOLUME_7D", "GASLESS_TXNS_7D", "CATEGORY"],
    "30d": ["RN_30D", "LOGO", "PROJECT", "ACTIVE_ACCOUNTS_30D", "PAYMASTER_VOLUME_30D", "GASLESS_TXNS_30D", "CATEGORY"],
    "90d": ["RN_90D", "LOGO", "PROJECT", "ACTIVE_ACCOUNTS_90D", "PAYMASTER_VOLUME_90D", "GASLESS_TXNS_90D", "CATEGORY"],
}

const PERIOD_TO_SORT_COLUMN = {
    "7d": "PAYMASTER_VOLUME_7D",
    "30d": "PAYMASTER_VOLUME_30D",
    "90d": "PAYMASTER_VOLUME_90D",
}

export function DataTableTimePeriod<TData>({
    table,
    setSorting,
}: DataTableTimePeriodProps<TData>) {
    const setVisibleColumns = (period: keyof typeof TIME_PERIOD_COLUMNS) => {
        const columnsToShow = TIME_PERIOD_COLUMNS[period]
        const sortColumn = PERIOD_TO_SORT_COLUMN[period]

        // Hide all columns first
        table.getAllColumns().forEach(column => {
            column.toggleVisibility(false)
        })

        // Show only the columns for selected period
        columnsToShow.forEach(columnId => {
            const column = table.getColumn(columnId)
            if (column) {
                column.toggleVisibility(true)
            }
        })

        // Update sorting
        setSorting([{ id: sortColumn, desc: false }])
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-black h-8"
                >
                    <ClockIcon className="mr-2 h-4 w-4" />
                    Time Period
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Select period</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setVisibleColumns("7d")}>
                    7D
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setVisibleColumns("30d")}>
                    30D
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setVisibleColumns("90d")}>
                    90D
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}