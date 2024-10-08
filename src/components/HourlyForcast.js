import { AppStructure } from "../AppStructure";
import store from "../store";
import WeatherStatusIcon from "./WeatherStatusIcon";

class HourlyForcast extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <ul class="border p-5 rounded-lg grid grid-cols-3">
           ${
            store.weatherData?.list
            .slice(0, 6)
        .map(item => {
                return `
                <li>
                  <span>${item.dt_txt.split(" ")[1].slice(0, item.dt_txt.split(" ")[1].length - 3)}</span>
                  <span>${WeatherStatusIcon.render(item)}</span>
                  <span>${Math.round(+item.main.temp - 273.15)} ℃</span>
                </li>
                `
            })
            .join("")
           }
        </ul>
        `
    }

    render () {
        this.select("#HourlyForcast").innerHTML = "";
        this.select("#HourlyForcast").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new HourlyForcast();