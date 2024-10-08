import { AppStructure } from "../AppStructure";
import store from "../store";
import WeatherStatusIcon from "./WeatherStatusIcon";

class TodayWeatherStatus extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center">
          <span>${store.weatherData?.list[0]?.weather[0]?.main}</span>
          <span id="TodayWeatherStatusIcon">${WeatherStatusIcon.render(store.weatherData?.list[0])}</span>
        </div>
        `
    }

    render () {
        this.select("#TodayWeatherStatus").innerHTML = "";
        this.select("#TodayWeatherStatus").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherStatus();