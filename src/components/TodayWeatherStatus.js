import { AppStructure } from "../AppStructure";
import store from "../store";
import TodayWeatherStatusIcon from "./TodayWeatherStatusIcon";

class TodayWeatherStatus extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center">
          <span id="TodayWeatherStatusIcon">${TodayWeatherStatusIcon.render(store.weatherData?.list[0])}</span>
          <span>${store.weatherData?.list[0]?.weather[0]?.main}</span>
        </div>
        `
    }

    render () {
        this.select("#TodayWeatherStatus").innerHTML = "";
        this.select("#TodayWeatherStatus").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherStatus();