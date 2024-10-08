import { AppStructure } from "../AppStructure";
import store from "../store";
import CityInfo from "./CityInfo";
import Spinner from "./Spinner";
import TodayWeather from "./TodayWeather";
import DailyForcast from "./DailyForcast";
import HourlyForcast from "./HourlyForcast";

class Search extends AppStructure {

    handleEvents () {
        let searchInput = "";

        this.select("#SearchBox input").addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                searchInput = this.select("#SearchBox input").value;

                this.select("#SpinnerContainer").classList.remove("hidden");
                this.select("#MainContainer").classList.add("hidden");

                await store.getLocationInfoByCityName(searchInput)
                .then(() => {
                    this.select("#SearchBox input").value = "";

                    this.select("#SpinnerContainer").classList.add("hidden");
                    this.select("#MainContainer").classList.remove("hidden");

                    CityInfo.render();
                    TodayWeather.render();
                    DailyForcast.render();
                    HourlyForcast.render();
                })
            }
        })
    }

    render () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div id="SearchBox">
          <input placeholder="City..." class="w-full rounded-3xl px-3 py-1 border border-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white" />
        </div>
        `
    }
}

export default new Search();