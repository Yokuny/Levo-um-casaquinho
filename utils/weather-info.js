const weather_info = async (lat, lon) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );

  const data = await response.json();
  return data;
};
export default weather_info;
