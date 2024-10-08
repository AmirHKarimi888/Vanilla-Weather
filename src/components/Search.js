import { AppStructure } from "../AppStructure";
import store from "../store";
import CityInfo from "./CityInfo";
import Spinner from "./Spinner";
import TodayWeather from "./TodayWeather";

class Search extends AppStructure {

    handleEvents () {
        let searchInput = "";
        
        this.select("#SearchBox input").addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                searchInput = this.select("#SearchBox input").value;

                this.select("#SpinnerContainer").innerHTML = "";
                this.select("#SpinnerContainer").insertAdjacentHTML("afterbegin", Spinner.render());

                await store.getLocationInfoByCityName(searchInput)
                .then(() => {
                    CityInfo.render();
                    TodayWeather.render();
                    this.select("#SpinnerContainer").innerHTML = "";
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