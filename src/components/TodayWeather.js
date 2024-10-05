import { AppStructure } from "../AppStructure";
import TodayWeatherOthers from "./TodayWeatherOthers";
import TodayWeatherStatus from "./TodayWeatherStatus";
import TodayWeatherTemp from "./TodayWeatherTemp";

class TodayWeather extends AppStructure {

    handleEvents () {
        TodayWeatherTemp.render();
        TodayWeatherStatus.render();
        TodayWeatherOthers.render();
    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="border p-5 rounded-lg grid grid-cols-3">
          <div id="TodayWeatherTemp"></div>
          <div id="TodayWeatherStatus"></div>
          <div id="TodayWeatherOthers"></div>
        </div>
        `
    }

    render () {
        this.select("#TodayWeather").innerHTML = "";
        this.select("#TodayWeather").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeather();