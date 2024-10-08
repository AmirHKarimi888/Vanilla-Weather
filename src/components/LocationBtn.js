import { AppStructure } from "../AppStructure";
import store from "../store";
import CityInfo from "./CityInfo";
import Spinner from "./Spinner";
import TodayWeather from "./TodayWeather";
import DailyForcast from "./DailyForcast";
import HourlyForcast from "./HourlyForcast";

class LocationBtn extends AppStructure {

  handleEvents() {
    const getLocationBtn = document.querySelector("#LocationBtn");

    getLocationBtn.addEventListener("click", async () => {
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
                    DailyForcast.render();
                    HourlyForcast.render();
                  })
          });
      }
    })

  }

  render() {
    setTimeout(() => this.handleEvents());
    return /*html*/`
        <div id="LocationBtn" class="flex justify-end">
        <div
          class="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
        >
          <button class="px-5 py-2 flex gap-2 justify-center items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"/></svg></span>
            <span class="hidden md:inline">Here</span>
          </button>
        </div>
        
        
        </div>
        `
  }
}

export default new LocationBtn();