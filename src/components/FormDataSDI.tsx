"use client";

import React, { useState } from "react";
import { postDataSDI } from "@/utils/api";

const FormDataSDI = () => {
  const [formData, setFormData] = useState({
    id: "",
    konsep: "",
    status: "",
    nama_klasifikasi: "",
    nama_satuan: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await postDataSDI(formData);
      setMessage("✅ Data berhasil dikirim!");
    } catch (err: any) {
      setMessage(`❌ Gagal mengirim data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tambah Data SDI</h2>
      {message && <p className="text-gray-700">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="id" placeholder="ID" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="konsep" placeholder="Konsep" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="status" placeholder="Status" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="nama_klasifikasi" placeholder="Klasifikasi" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="nama_satuan" placeholder="Satuan" onChange={handleChange} className="border p-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
          {loading ? "Mengirim..." : "Kirim Data"}
        </button>
      </form>
    </div>
  );
};

export default FormDataSDI;
