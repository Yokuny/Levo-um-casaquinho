import { Card, CityInfo, WeatherInfo } from "./Weather-Card.styles";

const Weather_Card = () => {
  return (
    <Card>
      <CityInfo>
        <h2>
          <span>Agora: </span>Venda Nova do Imigrante
        </h2>
        <h2>Parcialmente Nublado</h2>
      </CityInfo>
      <WeatherInfo>
        <div>
          <h2>
            <span>Mínima: </span> 16,0º
          </h2>
          <h2>
            <span>Máxima: </span> 20,0º
          </h2>
        </div>
        <div>
          <h1>
            18.2<span>ºC</span>
          </h1>
        </div>
      </WeatherInfo>
    </Card>
  );
};

export default Weather_Card;
