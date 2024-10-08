import { AppStructure } from "../AppStructure";
import store from "../store";
import WeatherStatusIcon from "./WeatherStatusIcon";
import useDate from "../hooks/useDate";

const { months, getDate } = useDate();

class DailyForcast extends AppStructure {

    handleEvents () {
        
    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <ul class="border dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 p-5 rounded-lg grid">
           ${
            store.weatherData?.list
        .filter(item => {
            if (item.dt_txt.includes("21:00:00")) {
                return item;
            }
        })
        .map(item => {
                return `
                <li class="flex justify-between p-2 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md cursor-pointer">
                  <span>${WeatherStatusIcon.render(item)}</span>
                  
                  <span>
                    ${Math.round(store.weatherData?.list.filter(i => {
                      if (i.dt_txt.includes(item.dt_txt.split(" ")[0])) {
                        return i;
                      }
                    })
                    .reduce((a, c) => a + +c.main.temp, 0) / store.weatherData?.list.filter(i => {
                      if (i.dt_txt.includes(item.dt_txt.split(" ")[0])) {
                        return i;
                      }
                     }).length - 273.15)
                    } ℃
                  </span>

                  <span>${+getDate(item.dt_txt.split(" ")[0])[2]} ${months[+getDate(item.dt_txt.split(" ")[0])[1] - 1]}</span>
                </li>
                `
            })
            .join("")
           }
        </ul>
        `
    }

    render () {
        this.select("#DailyForcast").innerHTML = "";
        this.select("#DailyForcast").insertAdjacentHTML("beforeend", this.generateHTML());
    }
}

export default new DailyForcast();