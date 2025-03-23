import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const requestData = await req.json(); // Ambil data dari request body

    const response = await axios.post("https://sikondang.serangkota.go.id/api/data_kominfo", requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching data from data_kominfo API:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Gagal mengirim data ke server eksternal." },
      { status: error.response?.status || 500 }
    );
  }
}