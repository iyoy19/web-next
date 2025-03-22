import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const requestData = await req.json(); // Ambil data dari request body

    const response = await axios.post("https://sikondang.serangkota.go.id/api/data_sdi", requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Gagal mengirim data ke server eksternal." },
      { status: error.response?.status || 500 }
    );
  }
}
