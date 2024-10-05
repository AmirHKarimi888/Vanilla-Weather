import store from "./store";
import CityInfo from "./components/CityInfo";
import LocationBtn from "./components/LocationBtn";
import ModeBtn from "./components/ModeBtn";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import TodayWeather from "./components/TodayWeather";
import { AppStructure } from "./AppStructure";

class App extends AppStructure {

    select(elementSelector) {
        return document.querySelector(elementSelector);
    }

    handleEvents() {

        this.select("#SpinnerContainer").innerHTML = "";
        this.select("#SpinnerContainer").insertAdjacentHTML("afterbegin", Spinner.render());

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                await store.getLocationInfo(lat, lon)
                    .then(() => this.select("#SpinnerContainer").innerHTML = "")
                    .then(() => {
                      CityInfo.render();
                      TodayWeather.render();
                    })
            });
        }

    }

    generateHTML() {
        setTimeout(() => this.handleEvents());
        return /*html*/ `
        <div class="w-[90%] mx-auto mt-5 flex items-center gap-5 md:justi">
          <div class="w-[15%] md:w-[25%]">
            ${ModeBtn.render()}
          </div>

          <div class="w-[70%] md:w-[50%]">
            ${Search.render()}
          </div>

          <div class="w-[15%] md:w-[25%]">
            ${LocationBtn.render()}
          </div>

          <div id="SpinnerContainer"></div>
        </div>

        <div class="w-[90%] md:flex-row sm:flex-col max-sm:flex-col mx-auto mt-5 flex justify-between">
          <div id="CityInfo" class="md:w-[40%]">
            
          </div>

          <div id="TodayWeather" class="md:w-[60%]">
            
          </div>
        </div>

        <div class="w-[90%] md:flex-row sm:flex-col max-sm:flex-col mx-auto mt-5 flex justify-between">
          <div class="md:w-[40%]">
          </div>

          <div id="ThisLocTime" class="md:w-[60%]">
          ${JSON.stringify(store.thisLocTime)}
          </div>
        </div>
        `
    }

    render() {
        this.select("#app").innerHTML = "";
        this.select("#app").insertAdjacentHTML("afterbegin", this.generateHTML());
    }
}

export default new App();