"use client";

import React, { useEffect, useState } from "react";
import { postDataSDI } from "@/utils/api";
import FetchDataTable from "@/components/FetchDataTable";

const FetchDataPage = () => {
  const [data, setData] = useState<any[]>([]); // Menyediakan tipe data yang lebih jelas
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = { key: "value" }; // Sesuaikan dengan kebutuhan API
        const response = await postDataSDI(requestData);
        
        // Pastikan respons berisi data yang valid dan urutkan berdasarkan ID
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
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">Data SDI</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {data.length > 0 && <FetchDataTable data={data} />}
      {data.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">Tidak ada data untuk ditampilkan.</p>
      )}
    </div>
  );
};

export default FetchDataPage;
