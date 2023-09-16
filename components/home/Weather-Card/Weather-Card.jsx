import { Card, CityInfo, WeatherInfo } from "./Weather-Card.styles.jsx";

import getWeatherData from "../../../utils/get-wether-data.js";

const Weather_Card = ({ data }) => {
  const { currentTemp, minTemp, maxTemp, cityName, weatherDescription } = getWeatherData(data);

  return (
    <Card backgroundColor={weatherDescription.color}>
      <CityInfo>
        <h2>
          <span>agora: </span>
          {cityName}
        </h2>
        <h2>{weatherDescription.title}</h2>
      </CityInfo>
      <WeatherInfo>
        <div>
          <h2>
            <span>mínima: </span> {minTemp}
          </h2>
          <h2>
            <span>máxima: </span> {maxTemp}
          </h2>
        </div>
        <div>
          <h1>{currentTemp}</h1>
        </div>
      </WeatherInfo>
    </Card>
  );
};

export default Weather_Card;
