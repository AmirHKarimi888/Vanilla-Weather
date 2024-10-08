import { AppStructure } from "../AppStructure";
import store from "../store";

class TodayWeatherOthers extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col justify-start items-center text-sm">
           <span>Humidity: <span class="font-bold">${store.weatherData?.list[0]?.main?.humidity}%</span></span>
           <span>Pressure: <span class="font-bold">${store.weatherData?.list[0]?.main?.pressure}hPa</span></span>
           <span>Wind Speed: <span class="font-bold">${store.weatherData?.list[0]?.wind?.speed}km/h</span></span>
        </div>
        `
    }

    render () {
        this.select("#TodayWeatherOthers").innerHTML = "";
        this.select("#TodayWeatherOthers").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherOthers();