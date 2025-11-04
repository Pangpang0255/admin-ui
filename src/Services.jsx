const city = "Jakarta";
const street = "Jl Kebon Jeruk";

export const getUsers = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Pangpang0255/post-data/refs/heads/main/postsData.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    return users.map((user) => ({
      id: user.id,
      title: user.title,
      body: user.body,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
