import { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";

function WeatherCard() {
  const { weatherData, setWeatherData, city, days } = useWeather();

  console.log(weatherData);
  console.log(city);

  // useEffect array dependency e city ve setWeatherData yı vererek bu iki değerin değişmesine bağlı olarak verinin sayfa her render edildiğinde bir kere gelmesi için.
  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&appid=60daef84501b200a2b67c500f24e19e4`
      );
        // data yı json a çeviriyoruz.
      const response = await api.json();
      setWeatherData(response.daily);
    };
    getData();
  }, [city, setWeatherData]);

  return (
    <div className="weather-card">
      {weatherData &&
        weatherData.map((oneDay, i) => {
          return (
            <div className="weather-item" key={i}>
                {/* Günleri sırayla getiriyoruz. */}
              <p className="day">{days[new Date(oneDay.dt * 1000).getDay()]}</p>
              <div>
                  {/* Card içindeki hava durumu iconları url si.  */}
                <img
                  src={`https://openweathermap.org/img/wn/${oneDay.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>

              <span className="description">
                {oneDay.weather[0].description}
              </span>
              <p>
                <span className="temp-max">
                  {Math.round(oneDay.temp.max)}&#176;C{" "}
                </span>
                <span> </span>
                <span>{Math.round(oneDay.temp.min)}&#176;C </span>
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default WeatherCard;
