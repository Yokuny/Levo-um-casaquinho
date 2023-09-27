const getWeatherData = (data) => {
  let currentTemp = (data?.list[0]?.main.temp ?? 0) - 273.15;
  let minTemp = (data?.list[0]?.main.temp_min ?? 0) - 273.15;
  let maxTemp = (data?.list[0]?.main.temp_max ?? 0) - 273.15;

  const cityName = data?.city?.name ?? "";

  const weatherDescription = data?.list[0]?.weather[0]?.main ?? "";
  const weatherDescriptionObject = {
    title: "-",
    color: "",
  };

  if (currentTemp < 0 || minTemp < 0 || maxTemp < 0) {
    currentTemp = 0;
    minTemp = 0;
    maxTemp = 0;
  }

  switch (weatherDescription) {
    case "Clear":
      weatherDescriptionObject.title = "Céu aberto";
      weatherDescriptionObject.color = "#ffff00";
      break;
    case "Clouds":
      weatherDescriptionObject.title = "Nublado";
      weatherDescriptionObject.color = "#e6e6fa";
      break;
    case "Rain":
      weatherDescriptionObject.title = "Chovendo";
      weatherDescriptionObject.color = "#175DD6";
      break;
    case "Snow":
      weatherDescriptionObject.title = "Nevando";
      weatherDescriptionObject.color = "#AFD3D3";
      break;
    case "Thunderstorm":
      weatherDescriptionObject.title = "Tempestade";
      weatherDescriptionObject.color = "#2B006B";
      break;
    case "Drizzle":
      weatherDescriptionObject.title = "Chuviscando";
      weatherDescriptionObject.color = "#B7D8E6";
      break;
    case "Mist":
      weatherDescriptionObject.title = "Neblina";
      weatherDescriptionObject.color = "#d3d3d3";
      break;
    default:
      weatherDescriptionObject.title = weatherDescription;
      weatherDescriptionObject.color = "#E6E6E6";
  }

  return {
    currentTemp: currentTemp.toFixed(1),
    minTemp: minTemp.toFixed(1),
    maxTemp: maxTemp.toFixed(1),
    cityName,
    weatherDescription: weatherDescriptionObject,
  };
};

export default getWeatherData;
