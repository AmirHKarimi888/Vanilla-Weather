import { AppStructure } from "../AppStructure";
import store from "../store";
import Spinner from "./Spinner";

class Search extends AppStructure {

    handleEvents () {
        let searchInput = "";
        this.select("#SearchBox input").addEventListener("change", () => searchInput = this.select("#SearchBox input").value);

        this.select("#SearchBox input").addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {

                this.select("#SpinnerContainer").innerHTML = "";
                this.select("#SpinnerContainer").insertAdjacentHTML("afterbegin", Spinner.render());
                
                await store.getWeatherData(searchInput)
                .then(async () => {
                    
                    await store.getLocationInfo(store.weatherData?.city.coord.lat, store.weatherData?.city.coord.lon);
                })
                .then(() => this.select("#SpinnerContainer").innerHTML = "")
                // .then(() => this.select("#WeatherData").innerHTML = JSON.stringify(store.weatherData))
                // .then(() => this.select("#ThisLocInfo").innerHTML = JSON.stringify(store.thisLocInfo))
                // .then(() => this.select("#ThisLocTime").innerHTML = JSON.stringify(store.thisLocTime))
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