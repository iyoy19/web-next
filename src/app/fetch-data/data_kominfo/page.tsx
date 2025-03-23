"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic untuk mencegah SSR error
import FetchDataTable from "@/components/FetchDataTable"; // Ensure this path is correct

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false }); // Mencegah SSR error

const DataKominfoPage = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = { key: "value" }; // Ganti dengan payload yang sesuai
                const response = await fetch("/api/data_kominfo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
                }

                const result = await response.json();
                if (result?.data_kominfo) {
                    const sortedData = result.data_kominfo.sort((a: any, b: any) => a.id - b.id);
                    setData(sortedData);
                } else {
                    setError("Data tidak tersedia.");
                }
            } catch (err: any) {
                setError("Gagal mengambil data: " + (err?.message || "Terjadi kesalahan."));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="p-4"
            style={{
                backgroundImage: "url('/image/event2.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Navbar /> {/* Panggil Navbar di sini */}
            <h1 className="text-2xl font-bold text-center text-white pt-20 pb-8">Data Kominfo</h1>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!loading && !error && Array.isArray(data) && data.length > 0 ? (
                <FetchDataTable data={data} />
            ) : (
                !loading && <p className="text-center text-gray-500">Tidak ada data untuk ditampilkan.</p>
            )}
        </div>
    );
};

export default DataKominfoPage;