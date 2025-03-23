export const postDataSDI = async (data: any) => {
  try {
    const response = await fetch("/api/data_sdi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Gagal mengirim data: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Terjadi kesalahan saat mengirim data ke API SDI:", error);
    throw new Error("Terjadi kesalahan saat mengirim data.");
  }
};

export const fetchDataKominfo = async (payload: Record<string, any>) => {
  try {
    const response = await fetch('https://sikondang.serangkota.go.id/api/data_kominfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status); // Tambahkan log status
    console.log('Response headers:', response.headers); // Tambahkan log headers

    if (!response.ok) {
      const errorText = await response.text(); // Ambil detail error dari respons
      console.error('Error response body:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const data = await response.json();
    console.log('Response data:', data); // Tambahkan log data
    return data;
  } catch (error) {
    console.error('Error fetching data from Sikondang API:', error);
    throw error;
  }
};