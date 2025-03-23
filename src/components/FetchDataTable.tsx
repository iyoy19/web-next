"use client";

import React, { useState, useMemo, useDeferredValue } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const FetchDataTable = ({ data }: { data: any[] }) => {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search); // Menunda pencarian saat user mengetik

  // Gunakan useMemo untuk optimasi filtering data
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(deferredSearch.toLowerCase())
      )
    );
  }, [data, deferredSearch]);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID <ArrowUpDown className="ml-2" />
        </Button>
      ),
      size: 50,
    },
    { accessorKey: "kode_sdsn", header: "Kode SDSN", size: 120 },
    { accessorKey: "konsep", header: "Konsep", size: 180 },
    { accessorKey: "status", header: "Status", size: 120 },
    { accessorKey: "nama_klasifikasi", header: "Klasifikasi", size: 160 },
    { accessorKey: "nama_satuan", header: "Satuan", size: 120 },
    { accessorKey: "nama_bidang", header: "Bidang", size: 160 },
    {
      accessorKey: "judul_indikator",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Indikator <ArrowUpDown className="ml-2" />
        </Button>
      ),
      size: 200,
    },
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full p-4 bg-white/80 shadow-md rounded-lg">
      {/* Input Pencarian */}
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Cari data..."
          className="w-64 border px-3 py-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabel */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{ minWidth: `${header.column.columnDef.size}px` }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{ minWidth: `${cell.column.columnDef.size}px` }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center h-24">
                  Tidak ada data yang cocok.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-black">
          {table.getRowModel().rows.length} dari {data.length} data tersedia.
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FetchDataTable;
