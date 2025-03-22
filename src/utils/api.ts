import axios from "axios";

// Fungsi untuk mengambil data SDI
export const postDataSDI = async (data: any) => {
  try {
    const response = await axios.post("/api/data_sdi", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Terjadi kesalahan saat mengirim data.");
  }
};

// Fungsi untuk mengambil data Kominfo
export const postDataKominfo = async (data: any) => {
  try {
    const response = await axios.post("https://sikondang.serangkota.go.id/api/data_kominfo", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Terjadi kesalahan saat mengirim data ke API Kominfo.");
  }
};
