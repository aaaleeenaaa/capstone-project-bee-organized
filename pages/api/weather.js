const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default async function handler(request, response) {
  const { location: weatherLocation } = request.query;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.weather_api_key}&q=${weatherLocation}&days=7&aqi=no&alerts=no`;

  try {
    const data = await fetcher(url);
    response.status(200).json(data);
  } catch (error) {
    response.status(error.status || 500).json({ error: error.message });
  }
}
