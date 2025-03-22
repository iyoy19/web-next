"use client";

import React, { useEffect, useState } from "react";
import { postDataKominfo } from "@/utils/api"; // Pastikan api ini sudah benar
import FetchDataTable from "@/components/FetchDataTable"; // Komponen untuk menampilkan tabel data

const FetchKominfoPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = { key: "value" }; // Sesuaikan dengan parameter yang dibutuhkan API
        const response = await postDataKominfo(requestData); // Gunakan fungsi yang sesuai

        // Pastikan response berisi data dan urutkan berdasarkan ID
        if (response?.data_kominfo) {
          const sortedData = response.data_kominfo.sort((a: any, b: any) => a.id - b.id);
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
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Data Kominfo</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {data.length > 0 && <FetchDataTable data={data} />}
      {data.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">Tidak ada data untuk ditampilkan.</p>
      )}
    </div>
  );
};

export default FetchKominfoPage;
