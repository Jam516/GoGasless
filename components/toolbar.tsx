"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChainSelector } from "@/components/chain-selector"

import { categories } from "@/components/categories"
import { DataTableFacetedFilter } from "@/components/faceted-filter"

import { DataTableTimePeriod } from "@/components/time-period-selector"

import type { SortingState } from "@tanstack/react-table"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>
}

export function DataTableToolbar<TData>({
    table,
    setSorting,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter projects..."
                    value={(table.getColumn("PROJECT")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("PROJECT")?.setFilterValue(event.target.value)
                    }
                    className="rounded-none border-black h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("CATEGORY") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("CATEGORY")}
                        title="Category"
                        options={categories}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="rounded-none h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
                <DataTableTimePeriod table={table} setSorting={setSorting} />
                <ChainSelector />
                {/* <DataTableViewOptions table={table} /> */}

            </div>

        </div>
    )
}