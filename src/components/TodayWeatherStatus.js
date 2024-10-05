import { AppStructure } from "../AppStructure";
import store from "../store";

class TodayWeatherStatus extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center">
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