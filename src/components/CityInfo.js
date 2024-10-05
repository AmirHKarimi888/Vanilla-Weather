import { AppStructure } from "../AppStructure";
import store from "../store";
import CityInfoDate from "./CityInfoDate";
import CityInfoTime from "./CityInfoTime";

class CityInfo extends AppStructure {

    handleEvents () {
        CityInfoTime.render();
        CityInfoDate.render();
    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`
        <div class="border p-5 rounded-lg">
          <div>${store.thisLocInfo?.city}</div>
          <div id="CityInfoTime"></div>
          <div id="CityInfoDate"></div>
        </div>
        `
    }

    render () {
        this.select("#CityInfo").innerHTML = "";
        this.select("#CityInfo").insertAdjacentHTML("afterbegin", this.generateHTML());
    }

}

export default new CityInfo();