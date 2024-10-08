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
        <div class="border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 p-5 rounded-lg grid md:grid-cols-3 grid-cols-2 gap-5">
          <div id="TodayWeatherTemp" class="grid justify-center items-center"></div>
          <div id="TodayWeatherStatus" class="grid justify-center items-center"></div>
          <div id="TodayWeatherOthers" class="grid justify-center items-center"></div>
        </div>
        `
    }

    render () {
        this.select("#TodayWeather").innerHTML = "";
        this.select("#TodayWeather").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new TodayWeather();