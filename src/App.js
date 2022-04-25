import "./App.css";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import WeatherCard from "./components/WeatherCard";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <Header />
        <Dropdown />
        <WeatherCard />
      </div>
    </WeatherProvider>
  );
}

export default App;
