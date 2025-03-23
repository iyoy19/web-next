"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic untuk mencegah SSR error
import { postDataSDI } from "@/utils/api";
import FetchDataTable from "@/components/FetchDataTable";

const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false }); // Navbar hanya di-render di client

const FetchDataPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = { key: "value" };
        const response = await postDataSDI(requestData);

        if (response?.data_sdi) {
          const sortedData = response.data_sdi.sort((a: any, b: any) => a.id - b.id);
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
        }}>
      <Navbar /> {/* Panggil Navbar di dalam return */}
      <h1 className="text-2xl font-bold text-center pt-20 pb-8 text-white">DATA SDI</h1>
      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {data.length > 0 && <FetchDataTable data={data} />}
      {data.length === 0 && !loading && !error && (
        <p className="text-center text-gray-300">Tidak ada data untuk ditampilkan.</p>
      )}
    </div>
  );
};

export default FetchDataPage;