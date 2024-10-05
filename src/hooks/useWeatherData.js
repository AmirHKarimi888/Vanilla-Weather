import store from "../store";

export default function () {

    const getWeatherData = async (cityName) => {
        await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&appid=450718ac8d1d6855c4f180ae47a58c2f`)
        .then(res => res.json())
        .then(data => store.weatherData = data)
        .then(() => console.log(store.weatherData))
    }

    return { getWeatherData };
}