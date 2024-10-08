import { AppStructure } from "../AppStructure";
import store from "../store";

class TodayWeatherOthers extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="flex flex-col items-center">
           <span>Humidity: ${store.weatherData?.list[0]?.main?.humidity}%</span>
           <span>Pressure: ${store.weatherData?.list[0]?.main?.pressure}hPa</span>
           <span>Wind Speed: ${store.weatherData?.list[0]?.wind?.speed}km/h</span>
        </div>
        `
    }

    render () {
        this.select("#TodayWeatherOthers").innerHTML = "";
        this.select("#TodayWeatherOthers").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeatherOthers();