import { AppStructure } from "../AppStructure";
import store from "../store";

class CityInfoName extends AppStructure {

    handleEvents () {

    }

    generateHTML () {
        setTimeout(() => this.handleEvents());
        return /*html*/`${store.thisLocInfo?.city}, <span class="font-normal text-sm">${store.thisLocInfo?.countryName}</span>`
    }

    render () {
        this.select("#CityInfoName").innerHTML = "";
        this.select("#CityInfoName").insertAdjacentHTML("afterbegin", this.generateHTML());
    }

}

export default new CityInfoName();