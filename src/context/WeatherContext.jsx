import { createContext, useState, useContext } from "react";
import citiesJSON from "../data/cities.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
//   Varsayılan olarak Muğla yı geliyor.
  const [city, setCity] = useState(citiesJSON[47]);  

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date();
  
  let day = date.getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "";
  }

  const values = {
    weatherData,
    setWeatherData, 
    city,
    setCity,
    citiesJSON,
    days,
    day
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

// Aynı işlemi tekrar tekrar componentlere yazmamak için custom hook kullandım.
export const useWeather = () => useContext(WeatherContext);
