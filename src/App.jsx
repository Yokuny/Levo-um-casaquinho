import { useEffect, useState } from "react";
import { RootLayout } from "./RootLayout.styles.jsx";
import Title_Search from "../components/home/Title-Search/Title-Search.jsx";
import Weather_Card from "../components/home/Weather-Card/Weather-Card.jsx";
import Chart_Graph from "../components/home/Chart-Graph/Chart_Graph.jsx";

import latLonRequest from "../utils/lat-lon-request.js";
import weatherRequest from "../utils/weather-info.js";

function App() {
  const [city, setCity] = useState("");
  const [actualCity, setActualCity] = useState("-");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getCity = async () => {
      try {
        const geoLocation = await latLonRequest(city);
        const { lat, lon } = geoLocation;

        const locationWeather = await weatherRequest(lat, lon);
        setActualCity(locationWeather?.city.name);

        locationWeather && setWeather(locationWeather);
      } catch (err) {
        console.log(err);
      }
    };
    city !== "" && getCity();
  }, [city]);

  return (
    <RootLayout>
      <Title_Search city={actualCity} setCity={setCity} />
      <Weather_Card data={weather} />
      {weather && <Chart_Graph data={weather} />}
    </RootLayout>
  );
}

export default App;
