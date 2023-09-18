const getWeekWeather = (data) => {
  if (!data) {
    return [];
  }

  const chartData = data.list.map((item) => {
    const dtObj = new Date(item.dt_txt);
    const date = dtObj.getDate();
    const time = `${date}/ ${dtObj.getHours()}h`;

    return {
      date: time,
      temperatura: (item.main.temp - 273.15).toFixed(1),
    };
  });

  return chartData;
};

export default getWeekWeather;
