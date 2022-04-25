import { useWeather } from "../context/WeatherContext";

function Dropdown() {
  const { city, setCity, citiesJSON } = useWeather();

  const changeCityName = (e) => {
    for (let i = 0; i < citiesJSON.length; i++) {
      if (e.target.value === citiesJSON[i].name) {
        setCity(citiesJSON[i]);
      }
    }
  };
  return (
    <form>
      <select name="name" id="name" onChange={changeCityName} value={city.name}>
        {citiesJSON.map((item, i) => {
          return (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>  
    </form>
  );
}

export default Dropdown;
