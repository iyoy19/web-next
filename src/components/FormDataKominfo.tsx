"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";  // Optional: for displaying notifications

const FormDataKominfo = () => {
  const [formData, setFormData] = useState({
    kode_sdsn: "",
    konsep: "",
    status: "",
    nama_klasifikasi: "",
    nama_satuan: "",
    nama_bidang: "",
    judul_indikator: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sikondang.serangkota.go.id/api/data_kominfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Data berhasil dikirim!");
        setFormData({
          kode_sdsn: "",
          konsep: "",
          status: "",
          nama_klasifikasi: "",
          nama_satuan: "",
          nama_bidang: "",
          judul_indikator: "",
        });
      } else {
        toast.error("Terjadi kesalahan saat mengirim data!");
      }
    } catch (error) {
      toast.error("Gagal terhubung ke server.");
    }
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">Form Pengiriman Data Kominfo</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="kode_sdsn" className="mb-2">Kode SDSN</label>
            <Input
              id="kode_sdsn"
              name="kode_sdsn"
              value={formData.kode_sdsn}
              onChange={handleChange}
              placeholder="Masukkan Kode SDSN"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="konsep" className="mb-2">Konsep</label>
            <Input
              id="konsep"
              name="konsep"
              value={formData.konsep}
              onChange={handleChange}
              placeholder="Masukkan Konsep"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="mb-2">Status</label>
            <Input
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Masukkan Status"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nama_klasifikasi" className="mb-2">Klasifikasi</label>
            <Input
              id="nama_klasifikasi"
              name="nama_klasifikasi"
              value={formData.nama_klasifikasi}
              onChange={handleChange}
              placeholder="Masukkan Klasifikasi"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nama_satuan" className="mb-2">Satuan</label>
            <Input
              id="nama_satuan"
              name="nama_satuan"
              value={formData.nama_satuan}
              onChange={handleChange}
              placeholder="Masukkan Satuan"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nama_bidang" className="mb-2">Bidang</label>
            <Input
              id="nama_bidang"
              name="nama_bidang"
              value={formData.nama_bidang}
              onChange={handleChange}
              placeholder="Masukkan Bidang"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="judul_indikator" className="mb-2">Judul Indikator</label>
            <Textarea
              id="judul_indikator"
              name="judul_indikator"
              value={formData.judul_indikator}
              onChange={handleChange}
              placeholder="Masukkan Judul Indikator"
            />
          </div>

          <div className="mt-4">
            <Button type="submit">Kirim Data</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDataKominfo;
