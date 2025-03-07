"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "@/components/pagination"
import { DataTableToolbar } from "@/components/toolbar"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    page_length: number
    stickyColumns?: boolean
    stickyColumnCount?: number
}

export function DataTable<TData, TValue>({
    columns,
    data,
    page_length,
    stickyColumns = false,
    stickyColumnCount = 3,
}: DataTableProps<TData, TValue>) {
    // State for sorting and filters (unchanged)
    const [sorting, setSorting] = React.useState<SortingState>([
        { id: "RN_30D", desc: false }
    ])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
        RN_7D: false,
        RN_90D: false,
        ACTIVE_ACCOUNTS_7D: false,
        PAYMASTER_VOLUME_7D: false,
        GASLESS_TXNS_7D: false,
        ACTIVE_ACCOUNTS_90D: false,
        PAYMASTER_VOLUME_90D: false,
        GASLESS_TXNS_90D: false,
    })

    // Set up the table as before
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: page_length,
            },
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    })

    // Define fixed widths for sticky columns
    const stickyColumnWidths = React.useMemo(() => [30, 50, 120], []);

    // Pre-calculate column positions once based on the fixed widths
    const stickyColumnPositions = React.useMemo(() => {
        const positions: number[] = [];
        let currentPosition = 0;

        for (let i = 0; i < stickyColumnCount; i++) {
            positions.push(currentPosition);
            currentPosition += stickyColumnWidths[i];
        }

        return positions;
    }, [stickyColumnWidths, stickyColumnCount]);

    // Extract table content to a separate variable for reuse
    const tableContent = (
        <Table>
            <TableHeader className="bg-gray-100">
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header, index) => {
                            const isSticky = stickyColumns && index < stickyColumnCount;

                            return (
                                <TableHead
                                    key={header.id}
                                    className={isSticky ? "sticky left-0 z-10 bg-gray-100" : ""}
                                    style={isSticky ? {
                                        left: `${stickyColumnPositions[index]}px`,
                                        width: `${stickyColumnWidths[index]}px`,
                                        minWidth: `${stickyColumnWidths[index]}px`,
                                        maxWidth: `${stickyColumnWidths[index]}px`
                                    } : {}}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                        >
                            {row.getVisibleCells().map((cell, index) => {
                                const isSticky = stickyColumns && index < stickyColumnCount;
                                // Add shadow only to the last sticky column
                                const isLastSticky = isSticky && index === stickyColumnCount - 1;

                                return (
                                    <TableCell
                                        key={cell.id}
                                        className={isSticky ? "sticky left-0 z-10 bg-white" : ""}
                                        style={{
                                            ...(isSticky ? {
                                                left: `${stickyColumnPositions[index]}px`,
                                                width: `${stickyColumnWidths[index]}px`,
                                                minWidth: `${stickyColumnWidths[index]}px`,
                                                maxWidth: `${stickyColumnWidths[index]}px`
                                            } : {}),
                                            ...(isLastSticky ? { boxShadow: "4px 0 6px -2px rgba(0,0,0,0.1)" } : {})
                                        }}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );

    // Conditionally render based on whether we're using sticky columns
    if (stickyColumns) {
        return (
            <div className="space-y-4">
                <DataTableToolbar table={table} setSorting={setSorting} />
                <p className="text-xs text-muted-foreground mb-4  md:hidden">Swipe horizontally to see more ←</p>
                <div className="overflow-x-auto">
                    {tableContent}
                </div>
                <DataTablePagination table={table} />
            </div>
        );
    }

    // Default rendering (unchanged from original)
    return (
        <div className="space-y-4">
            <DataTableToolbar table={table} setSorting={setSorting} />
            <p className="text-xs text-muted-foreground mb-4 md:hidden">Swipe horizontally to see more ←</p>
            <div>
                {tableContent}
            </div>
            <DataTablePagination table={table} />
        </div>
    );
}