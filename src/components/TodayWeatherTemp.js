import { AppStructure } from "../AppStructure";
import store from "../store";

class TodayWeatherTemp extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center">
          <span class="font-bold text-xl">${Math.round(+store.weatherData?.list[0]?.main?.temp - 273.15)} ℃</span>
          <span>Feels like ${Math.round(+store.weatherData?.list[0]?.main?.feels_like - 273.15)} ℃</span>
        </div>
        `
    }

    render () {
        this.select("#TodayWeatherTemp").innerHTML = "";
        this.select("#TodayWeatherTemp").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherTemp();