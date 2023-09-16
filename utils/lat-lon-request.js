const lat_lon = async (location) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location},BR&limit=2&appid=${apiKey}`
  );

  const data = await response.json();
  return data[0];
};
export default lat_lon;
