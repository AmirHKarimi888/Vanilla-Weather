import store from "./store";
import CityInfo from "./components/CityInfo";
import LocationBtn from "./components/LocationBtn";
import ModeBtn from "./components/ModeBtn";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import TodayWeather from "./components/TodayWeather";
import { AppStructure } from "./AppStructure";
import DailyForcast from "./components/DailyForcast";
import HourlyForcast from "./components/HourlyForcast";

class App extends AppStructure {

    select(elementSelector) {
        return document.querySelector(elementSelector);
    }

    handleEvents() {

        this.select("#SpinnerContainer").classList.remove("hidden");
        this.select("#MainContainer").classList.add("hidden");

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                await store.getLocationInfo(lat, lon)
                    .then(() => {
                      this.select("#SpinnerContainer").classList.add("hidden");
                      this.select("#MainContainer").classList.remove("hidden");

                      CityInfo.render();
                      TodayWeather.render();
                      DailyForcast.render();
                      HourlyForcast.render();
                    })
            });
        }

    }

    generateHTML() {
        setTimeout(() => this.handleEvents());
        return /*html*/ `
        <div id="MainContainer" class="dark:text-white">
        <div class="w-[90%] mx-auto mt-5 flex items-center gap-5 md:justify-center">
        <div class="w-[15%] md:w-[25%]">
          ${ModeBtn.render()}
        </div>

        <div class="w-[70%] md:w-[50%]">
          ${Search.render()}
        </div>

        <div class="w-[15%] md:w-[25%]">
          ${LocationBtn.render()}
        </div>
      </div>

      <div class="mx-auto lg:w-[70%] md:w-[85%] sm:w-[85%] md:mt-10 flex flex-col justify-center items-center">
      <div class="w-[90%] md:flex-row sm:flex-col max-sm:flex-col mx-auto mt-5 flex justify-between gap-5">
        <div id="CityInfo" class="md:w-[40%]">
          
        </div>

        <div id="TodayWeather" class="md:w-[60%]">
          
        </div>
      </div>

      <div class="w-[90%] md:flex-row sm:flex-col max-sm:flex-col mx-auto mt-5 flex justify-between gap-5">
        <div id="DailyForcast" class="md:w-[30%]">

        </div>

        <div id="HourlyForcast" class="md:w-[70%]">
        
        </div>
      </div>
      </div>
      </div>

        <div id="SpinnerContainer" class="w-full h-screen flex justify-center items-center hidden">${Spinner.render()}</div>
        `
    }

    render() {
        this.select("#app").innerHTML = "";
        this.select("#app").insertAdjacentHTML("afterbegin", this.generateHTML());
    }
}

export default new App();