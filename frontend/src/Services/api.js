const API_BASE_URL = "http://localhost:5000";

export async function getRecommendations(userData) {
  const response = await fetch(
    `${API_BASE_URL}/api/recommend`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get recommendations");
  }

  return response.json();
}